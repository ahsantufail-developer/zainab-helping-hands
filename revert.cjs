const fs = require('fs');
const readline = require('readline');
const path = require('path');

const logPath = 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\6426e9bc-9ba7-42eb-afd7-0528b12c392e\\.system_generated\\logs\\transcript.jsonl';

async function revert() {
  const fileStates = {}; // filePath -> content

  const fileStream = fs.createReadStream(logPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let lineNumber = 0;
  // User asked for "Act as an elite frontend engineer" at line 10829
  // We stop processing before this line to capture the state right before the SaaS refactor.
  const CUTOFF_LINE = 10829;

  for await (const line of rl) {
    lineNumber++;
    if (lineNumber >= CUTOFF_LINE) break;

    try {
      const entry = JSON.parse(line);
      
      if (entry.tool_calls) {
        for (const call of entry.tool_calls) {
          const name = call.name;
          const args = call.args;
          
          if (name === 'write_to_file' || name === 'default_api:write_to_file') {
            if (args.TargetFile && args.CodeContent) {
              const target = args.TargetFile.replace(/^"|"$/g, '').replace(/\\\\/g, '\\');
              let content = args.CodeContent;
              if (typeof content === 'string' && content.startsWith('"') && content.endsWith('"')) {
                try { content = JSON.parse(content); } catch(e){}
              }
              fileStates[target] = content;
            }
          }
          if (name === 'replace_file_content' || name === 'default_api:replace_file_content') {
            const target = args.TargetFile ? args.TargetFile.replace(/^"|"$/g, '').replace(/\\\\/g, '\\') : null;
            if (target && fileStates[target]) {
              const contentLines = fileStates[target].split('\n');
              const start = parseInt(args.StartLine) - 1;
              const end = parseInt(args.EndLine);
              
              let newContentStr = args.ReplacementContent;
              if (typeof newContentStr === 'string' && newContentStr.startsWith('"') && newContentStr.endsWith('"')) {
                try { newContentStr = JSON.parse(newContentStr); } catch(e){}
              }
              const newContent = newContentStr.split('\n');
              
              contentLines.splice(start, end - start, ...newContent);
              fileStates[target] = contentLines.join('\n');
            }
          }
          if (name === 'multi_replace_file_content' || name === 'default_api:multi_replace_file_content') {
             const target = args.TargetFile ? args.TargetFile.replace(/^"|"$/g, '').replace(/\\\\/g, '\\') : null;
             if (target && fileStates[target]) {
               let contentLines = fileStates[target].split('\n');
               
               let chunksObj = args.ReplacementChunks;
               if (typeof chunksObj === 'string') {
                 try { chunksObj = JSON.parse(chunksObj); } catch(e){ chunksObj = []; }
               }
               
               if (Array.isArray(chunksObj)) {
                 const chunks = [...chunksObj].sort((a,b) => parseInt(b.StartLine) - parseInt(a.StartLine));
                 for (const chunk of chunks) {
                   const start = parseInt(chunk.StartLine) - 1;
                   const end = parseInt(chunk.EndLine);
                   
                   let newContentStr = chunk.ReplacementContent;
                   if (typeof newContentStr === 'string' && newContentStr.startsWith('"') && newContentStr.endsWith('"')) {
                     try { newContentStr = JSON.parse(newContentStr); } catch(e){}
                   }
                   const newContent = newContentStr.split('\n');
                   
                   contentLines.splice(start, end - start, ...newContent);
                 }
                 fileStates[target] = contentLines.join('\n');
               }
             }
          }
        }
      }
    } catch (e) {
      // ignore
    }
  }

  let restoredCount = 0;
  for (const [filePath, content] of Object.entries(fileStates)) {
    // Only restore project source files
    if (filePath.includes('zainab-helping-hands') && !filePath.includes('brain') && (filePath.endsWith('.js') || filePath.endsWith('.jsx') || filePath.endsWith('.css') || filePath.endsWith('.html'))) {
      try {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, content);
        console.log('Restored:', filePath);
        restoredCount++;
      } catch (err) {
        console.error('Failed to restore ' + filePath, err);
      }
    }
  }
  console.log(`Restored ${restoredCount} files.`);
}

revert().then(() => console.log('Revert complete.'));

import React from 'react';
import { PieChart, Pie, Cell, Tooltip as PieTooltip, ResponsiveContainer } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as LineTooltip, Area, AreaChart } from 'recharts';
import { BarChart, Bar, Cell as BarCell, Tooltip as BarTooltip, XAxis as BarX, YAxis as BarY } from 'recharts';
import { StaggerItem } from './shared';

const pieData = [
  { name: 'Direct Delivery', value: 90, color: '#2D8653' },
  { name: 'Operations',      value: 7,  color: '#C9952A' },
  { name: 'Documentation',   value: 3,  color: '#5A6B5E' }
];

const monthlyData = [
  { month: 'Jan', families: 45, packages: 38 },
  { month: 'Feb', families: 62, packages: 54 },
  { month: 'Mar', families: 78, packages: 69 },
  { month: 'Apr', families: 95, packages: 88 },
  { month: 'May', families: 118, packages: 104 },
  { month: 'Jun', families: 142, packages: 128 }
];

const programData = [
  { program: 'Food & Rashan', value: 60, color: '#2D8653' },
  { program: 'Clean Water',   value: 25, color: '#C9952A' },
  { program: 'Family Care',   value: 15, color: '#5A6B5E' }
];

export default function ImpactDashboard() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6 w-full">
      
      {/* Chart 1: Allocation Donut */}
      <StaggerItem className="bg-green-900 rounded-lg p-6 border-t-2 border-gold-500 shadow-md relative h-full">
        <h4 className="font-heading text-white text-xl mb-4">Donation Allocation</h4>
        <div className="h-[220px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%" cy="50%"
                innerRadius={65} outerRadius={90}
                startAngle={90} endAngle={-270}
                paddingAngle={2}
                dataKey="value"
                animationBegin={200}
                animationDuration={1500}
                animationEasing="ease-out"
              >
                {pieData.map((entry, i) => (
                  <Cell key={`cell-${i}`} fill={entry.color} stroke="none" />
                ))}
              </Pie>
              <PieTooltip 
                contentStyle={{ 
                  background: 'var(--green-800)', 
                  border: '1px solid var(--gold-500)',
                  borderRadius: '4px',
                  color: 'white'
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="font-display text-gold-500 text-4xl leading-none">90%</span>
            <span className="font-body text-xs text-textMuted uppercase tracking-widest mt-1">Direct</span>
          </div>
        </div>
      </StaggerItem>

      {/* Chart 2: Monthly Impact Line */}
      <StaggerItem className="bg-green-900 rounded-lg p-6 border-t-2 border-gold-500 shadow-md h-full">
        <h4 className="font-heading text-white text-xl mb-4">Impact Growth</h4>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#C9952A" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#C9952A" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="month" tick={{ fill: '#5A6B5E', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#5A6B5E', fontSize: 11 }} axisLine={false} tickLine={false} />
              <LineTooltip contentStyle={{ 
                background: 'var(--green-800)',
                border: '1px solid var(--gold-500)',
                borderRadius: '4px', color: 'white'
              }} />
              <Area type="monotone" dataKey="families"
                    stroke="#C9952A" strokeWidth={2.5}
                    fill="url(#goldGrad)"
                    dot={{ fill: '#C9952A', r: 4, strokeWidth: 2, stroke: '#0F2518' }}
                    activeDot={{ r: 6, fill: '#E0B84A' }}
                    animationDuration={2000}
                    animationEasing="ease-out" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </StaggerItem>

      {/* Chart 3: Program Split */}
      <StaggerItem className="bg-green-900 rounded-lg p-6 border-t-2 border-gold-500 shadow-md h-full md:col-span-2 lg:col-span-1">
        <h4 className="font-heading text-white text-xl mb-4">Focus Areas</h4>
        <div className="h-[160px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={programData} layout="vertical">
              <BarX type="number" hide />
              <BarY dataKey="program" type="category" width={100}
                    tick={{ fill: '#9ab4a0', fontSize: 12 }}
                    axisLine={false} tickLine={false} />
              <BarTooltip contentStyle={{
                background: 'var(--green-800)',
                border: '1px solid var(--gold-500)',
                borderRadius: '4px', color: 'white'
              }} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
              <Bar dataKey="value" radius={[0,4,4,0]} animationDuration={1800} animationEasing="ease-out">
                {programData.map((entry, i) => (
                  <BarCell key={`cell-${i}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </StaggerItem>

    </div>
  );
}

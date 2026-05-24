import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function HeroShader() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Disable on mobile
    if (window.innerWidth < 768) return;

    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(2, 2);

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float u_time;
      uniform vec2 u_resolution;
      varying vec2 vUv;

      vec3 mod289(vec3 x) { 
        return x - floor(x * (1./289.)) * 289.; 
      }
      vec2 mod289(vec2 x) { 
        return x - floor(x * (1./289.)) * 289.; 
      }
      vec3 permute(vec3 x) { 
        return mod289(((x*34.)+1.)*x); 
      }
      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.,0.) : vec2(0.,1.);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute(permute(i.y + vec3(0.,i1.y,1.)) + i.x + vec3(0.,i1.x,1.));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.);
        m = m*m; m = m*m;
        vec3 x = 2.*fract(p * C.www) - 1.;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314*(a0*a0+h*h);
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130. * dot(m, g);
      }

      void main() {
        vec2 uv = vUv;
        float t = u_time * 0.00025;
        
        float n1 = snoise(uv * 2.5 + t);
        float n2 = snoise(uv * 4.0 - t * 1.3);
        float n3 = snoise(uv * 1.2 + t * 0.7);
        float noise = (n1 * 0.5 + n2 * 0.3 + n3 * 0.2);
        
        vec3 col1 = vec3(0.06, 0.14, 0.09);
        vec3 col2 = vec3(0.10, 0.35, 0.22);
        vec3 gold = vec3(0.79, 0.59, 0.17);
        
        vec3 color = mix(col1, col2, noise * 0.5 + 0.5);
        
        float vein1 = abs(sin(uv.x * 8. + noise * 2. + t * 2.));
        float vein2 = abs(sin(uv.y * 6. - noise * 1.5 + t * 1.5));
        float veins = smoothstep(0.97, 1.0, 1.0 - vein1) + smoothstep(0.97, 1.0, 1.0 - vein2);
        color += gold * veins * 0.4;
        
        vec2 vig = uv * 2. - 1.;
        float vignette = 1. - dot(vig, vig) * 0.4;
        color *= vignette;
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      }
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let animationFrameId;

    const animate = () => {
      material.uniforms.u_time.value += 1;
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 z-0 pointer-events-none hidden md:block"
    />
  );
}

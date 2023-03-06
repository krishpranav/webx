import { ModulePath } from './types'

export const CDN = 'https://cdn.skypack.dev/pin/'

export const libraries: Record<string, ModulePath> = {
  jQuery: {
    minimal: `jQuery (for DOM manipulation)`,
    basic: `window.$; // jQuery (for DOM manipulation)`,
    prompt: `import $ from "${CDN}jquery.js";`,
    prod: `import $ from "${CDN}jquery@v3.5.1-GJsJJ2VEWnBDZuot9fRf/mode=imports,min/optimized/jquery.js";`,
  },
  tone: {
    minimal: `Tone.js (for sound synthesis)`,
    basic: `window.Tone; // tone.js (for sound synthesis)`,
    prompt: `import Tone from "${CDN}tone.js";`,
    prod: `import Tone from "${CDN}tone@v13.8.25-Y8DZtCNdyebBxcPTSCWz/mode=imports,min/optimized/tone.js";`,
  },
  three: {
    minimal: `Three.js (for 3D games, also has FirstPersonControls, FlyControls and OrbitControls)`,
    basic: `window.THREE; // Three.js (for 3D games, also has FirstPersonControls, FlyControls and OrbitControls)`,
    prompt: `import * as THREE from "${CDN}three.js";`,
    prod: `import * as THREE from "${CDN}three@v0.147.0-OePr4dXxGMRPSzlPRCyx/mode=imports,min/optimized/three.js";`,
  },
}
// Ambient types for the vendored ThreeUI sources in src/shaders.
declare module '*.html?raw' {
  const source: string;
  export default source;
}

// three128 is three@0.128.0 under an npm alias; reuse the installed three typings.
declare module 'three128' {
  export * from 'three';
}

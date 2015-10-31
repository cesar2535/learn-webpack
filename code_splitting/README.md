# Code Splitting

- `require.ensure` - CommonJS
- `require` - AMD

- `commons.js`
  - the module system
  - chunk loading logic
  - module `common.js` which is used in both pages
- `entryA.bundle.js`
  - the entry point `entryA.js`
  - it would contain any other module that is only used by `entrtA`
- `1.chunk.js`
  - module `shared.js`

```bash
Hash: 8e1bb3acb1f9c8acca0c
Version: webpack 1.12.2
Time: 2994ms
           Asset       Size  Chunks             Chunk Names
entryA.bundle.js     1.1 kB       0  [emitted]  entryA
      1.chunk.js  975 bytes       1  [emitted]
entryB.bundle.js    1.11 kB       2  [emitted]  entryB
      commons.js    4.06 kB       3  [emitted]  commons.js
chunk    {0} entryA.bundle.js (entryA) 272 bytes {3} [rendered]
    [0] ./entryA.js 272 bytes {0} [built]
chunk    {1} 1.chunk.js 323 bytes {0} {2} [rendered]
    [2] ./shared.js 323 bytes {1} [built]
        require.ensure item ./shared [0] ./entryB.js 9:0-12:2
        cjs require ./shared [0] ./entryB.js 10:15-34
        amd require ./shared [0] ./entryA.js 9:0-11:2
chunk    {2} entryB.bundle.js (entryB) 316 bytes {3} [rendered]
    [0] ./entryB.js 316 bytes {2} [built]
chunk    {3} commons.js (commons.js) 107 bytes [rendered]
    [1] ./common.js 107 bytes {3} [built]
        cjs require ./common [0] ./entryB.js 3:14-33
        cjs require ./common [0] ./entryA.js 3:14-33
        cjs require ./common [2] ./shared.js 11:14-33
```

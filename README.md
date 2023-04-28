# reproduce-typescript-54057

reproduce-typescript-54057

## reproduce

```sh
$ npm exec -- tsc --build
/path/to/node_modules/typescript/lib/tsc.js:113984
      throw e;
      ^

Error: Debug Failure. False expression: Paths must either both be absolute or both be relative
    at getRelativePathFromDirectory (/path/to/node_modules/typescript/lib/tsc.js:5717:9)
    at getLocalModuleSpecifier (/path/to/node_modules/typescript/lib/tsc.js:41911:206)
    at computeModuleSpecifiers (/path/to/node_modules/typescript/lib/tsc.js:41875:21)
    at getModuleSpecifiersWithCacheInfo (/path/to/node_modules/typescript/lib/tsc.js:41831:18)
    at getModuleSpecifiers (/path/to/node_modules/typescript/lib/tsc.js:41803:10)
    at getSpecifierForModuleSymbol (/path/to/node_modules/typescript/lib/tsc.js:48272:27)
    at symbolToTypeNode (/path/to/node_modules/typescript/lib/tsc.js:48317:23)
    at createAnonymousTypeNode (/path/to/node_modules/typescript/lib/tsc.js:47333:20)
    at typeToTypeNodeWorker (/path/to/node_modules/typescript/lib/tsc.js:47178:16)
    at typeToTypeNodeHelper (/path/to/node_modules/typescript/lib/tsc.js:46958:24)

Node.js v18.15.0
```

## Workaround

```sh
diff --git a/src/index.ts b/src/index.ts
index e46ce65..0fe805e 100644
--- a/src/index.ts
+++ b/src/index.ts
@@ -1,8 +1,8 @@
-export const mod = await (async () => {
+export const mod: typeof import("./case0.js") = await (async () => {
   const x: number = 0;
   switch (x) {
     case 0:
-      return await import("./case0.js");
+      return await import("./case0.js") as any;
     case 1:
       return await import("./case1.js");
     default:
```

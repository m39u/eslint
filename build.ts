import { $, build, env, write } from "bun";
import { chdir } from "node:process";
import packageJson from "./package.json";

const pkg: Partial<typeof packageJson> = packageJson;

delete pkg.devDependencies;
delete pkg.scripts;

await build({
  entrypoints: ["src/index.ts"],
  external: ["*"],
  minify: true,
  outdir: "dist",
  target: "bun",
});
await $`cp LICENSE README.md dist`;
await write("dist/package.json", `${JSON.stringify(pkg, null, 2)}\n`);

if (env.NPM_TOKEN) {
  chdir("dist");
  await write(".npmrc", "//registry.npmjs.org/:_authToken=${NPM_TOKEN}\n");
  await $`npm publish --access public`;
}

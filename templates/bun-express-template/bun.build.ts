await Bun.build({
  entrypoints: ['./src/app.ts'],
  outdir: './dist',
  target: 'bun',
  minify: true,
});

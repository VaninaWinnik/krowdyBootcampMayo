import esbuild from 'esbuild'

esbuild.build({
    entryPoints: ['src/background.js', 'src/scripts/scrapper.js'],
    outdir: 'build',
    bundle: true,
    watch: true,
    minify: true 
}).then(result => {
    console.log('watching...')
    console.log(result)
}).catch(error=>{
    console.log(error)
})
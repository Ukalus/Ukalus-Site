<script lang="ts">
    import * as THREE from 'three';
    export let threeUrl: string;
    async function getThreeScript(){
        let threeScriptPromise = await fetch(threeUrl)
        let threeScript = await threeScriptPromise.text()
        return threeScript 
    } 
    $: canvasUkalus = ""
    $: width = 400;
    $: height = 400;
    getThreeScript().then(code => eval(`(function(){${code}})(${width},${height})`)(canvasUkalus,width,height))
    if(width){
    }
</script>

<canvas bind:this={canvasUkalus}></canvas>

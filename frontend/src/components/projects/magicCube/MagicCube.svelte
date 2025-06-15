<script>
    import { onMount } from "svelte";
    import { initCube } from "./MagicCube";
    onMount(() => {
        initCube()
    });
</script>

<div id="cubeContainer"></div>


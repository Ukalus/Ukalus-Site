<script lang="ts">
  import { onMount } from 'svelte';
  import { initCube } from './MagicCube';

  let canvas: HTMLCanvasElement;

  onMount(() => {
    if (canvas) {
      initCube(canvas);
    }
  });
</script>

<canvas bind:this={canvas} id="rubix" style="width: 100%; height: 100%; display: block;"></canvas>

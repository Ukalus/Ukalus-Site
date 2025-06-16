<script lang="ts">
  import { onMount } from 'svelte';
  import { createScene } from './WalkingCharacter';

  let canvas: HTMLCanvasElement;

  onMount(() => {
    if (canvas) {
      createScene(canvas);
    }
  });
</script>

<canvas bind:this={canvas} id="walking_character" style="width: 100%; height: 100%; display: block;"></canvas>
<script>
  import { onMount, onDestroy } from 'svelte';

  export let CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$#%&* ,';
  export let TARGET = 'HELLO';
  export let doSolve = false;
  export let percentSolved = 0;

  let NUM_CHARS = TARGET.length;
  let matrixChars = scrambleWord(TARGET); // ← Scrambled start
  let intervals = [];

  const startIndex = Math.floor(Math.random() * (NUM_CHARS - TARGET.length));
  let lockedIndices = Array(TARGET.length).fill(false);

  function getRandomChar() {
    return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
  }

  function scrambleWord(w) {
    const arr = w.split('');
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function startMatrixEffect() {
    intervals.forEach(clearInterval);
    intervals = [];

    for (let i = 0; i < NUM_CHARS; i++) {
      matrixChars[i] = getRandomChar();

      intervals[i] = setInterval(() => {
        if (i >= startIndex && i < startIndex + TARGET.length) {
          const targetPos = i - startIndex;
          if (lockedIndices[targetPos]) return;

          const newChar = getRandomChar();
          matrixChars[i] = newChar;

          if (newChar === TARGET[targetPos]) {
            lockedIndices[targetPos] = true;
            clearInterval(intervals[i]);

            // Update percentSolved every time a character locks
            const lockedCount = lockedIndices.filter(Boolean).length;
            percentSolved = (lockedCount / TARGET.length) * 100;
          }
        } else {
          matrixChars[i] = getRandomChar();
        }
        matrixChars = [...matrixChars];
      }, 100 + Math.random() * 300);
    }
  }
  onMount(() => {
    startMatrixEffect();
  });

  onDestroy(() => {
    intervals.forEach(clearInterval);
  });
  $: if (doSolve) {
    startMatrixEffect();
  }
</script>


<style>

  @keyframes flicker {
    0% { opacity: 1; }
    50% { opacity: 0.7; }
    100% { opacity: 1; }
  }
</style>

 <button on:click={() => doSolve=true}>
{#each matrixChars as char}
 {char}
{/each}
 </button>

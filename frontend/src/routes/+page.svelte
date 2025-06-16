<script lang="ts">
  import {  Heading } from "flowbite-svelte";
	import MatrixCharacters from "src/components/MatrixCharacters.svelte";
	import MagicCube from "src/components/projects/magicCube/MagicCube.svelte";
	import WalkingCharacter from "src/components/WalkingCharacter/WalkingCharacter.svelte";
  
  let scrambleProgress= [];
  $: scrambleAverage = (scrambleProgress.reduce((acc, val) => acc + val, 0) / scrambleProgress.length).toFixed(2);
</script>
<div class="
  bg-gradient-to-b
  from-slate-900
  to-slate-800 
  p-60
   
  "
  >
  <div class="
    
    flex 
    flex-row 
    gap-8 
    
    justify-center
    justify-items-center 
    items-center">
    <div class="text-white text-[12rem]">
      ◯
    </div>
    <div class="grid gap-4">
              
              <div class="p-5">
                <Heading class="text-gray-300 py-4 border-none">
                  <MatrixCharacters bind:percentSolved={scrambleProgress[0]} TARGET="Welcome Traveler, im"/>
                  <a href="./" class="text-teal-400">Ukalus</a>
                  
                </Heading>
                <Heading class="text-gray-300 py-4 border-none">
                  <MatrixCharacters  bind:percentSolved={scrambleProgress[1]} TARGET="I do"/> <a href="./" class="text-red-600">Programming</a> <MatrixCharacters bind:percentSolved={scrambleProgress[2]} TARGET="and"/> <a href="./" class="text-indigo-600">Digital Art</a>
                </Heading>
                <Heading 
                  class="text-gray-300 py-4 border-none"><MatrixCharacters  bind:percentSolved={scrambleProgress[4]} TARGET="Check out some of my"/> <a href="./" class="text-orange-400">Projects</a>
                </Heading>
                <Heading tag="h6"
                  class="text-gray-400 py-4 border-none">
                [ Solving... current progress: {scrambleAverage}% ]
                </Heading>
              </div>
              
              
    </div>
    
</div>
<div class="text-white text-[8rem] flex justify-center">
  ⌄
</div>
<div class="flex pt-40">
  <WalkingCharacter/>

</div>
<div>
    <Heading class="text-gray-300 p-4 border-none text-center">"At vero eos et accusam, et justo duo"</Heading>
  </div>
     <MagicCube></MagicCube>
<div>
    <Heading class="text-gray-300 p-4 border-none text-center">"Et justo duo, at vero eos et accusam"</Heading>
  </div>
</div>






<script lang="ts">
  import { Card, Heading, Hr } from "flowbite-svelte";

</script>
<div class="flex flex-row gap-8 h-[80vh]">
    <div class="grid gap-8content-center  basis-2/4 ">
            <div>
              <Hr/>
              <div class="flex flex-col gap-3 w-[50%]">
                  <div class="py-2 bg-teal-400 w-[25%]"></div>
                  <div class="py-2 bg-red-600"></div>
                  <div class="py-2 bg-blue-600 w-[45%]"></div>
              </div>
              <Hr/>
            </div>
            <div>
              <div class="dark:bg-slate-800 bg-white dark:border-white border-slate-900 dark:border-2 border-4 drop-shadow-2xl p-5">
                <Heading class="text-4xl font-bold py-4 border-none">Hello, my name is <a href="./" class="text-teal-400">Ukalus</a></Heading>
                <Heading class="text-4xl font-bold py-4 border-none">Im a <a href="./" class="text-red-600">Web Developer</a> and <a href="./" class="text-indigo-600">Digital Artist</a></Heading>
                <Heading class="text-4xl font-bold py-4 border-none">Check out some of my <a href="./" class="text-orange-400">Projects</a></Heading>
              </div>
              <div class="polka-bg w-full py-12 my-5"/>
            </div>
            <div>
              <Hr/>
              <div class="flex flex-row gap-5">
                  <div class="flex flex-row">
                      <div class="triangle-up"></div>
                      <div class="triangle-down"></div>
                  </div>
                  <div class="square"></div>
                  <div class="circle"></div>
                  <div class="triangle-down"></div>
                  <div class="square"></div>
                  <div class="circle"></div>
                  <div class="flex flex-row">
                      <div class="triangle-up"></div>
                      <div class="triangle-down"></div>
                      <div class="triangle-up"></div>
                  </div>
                  <div class="circle"></div>
                  <div class="triangle-down"></div>
                  
                  <div class="square"></div>
                  <div class="circle"></div>
                  <div class="triangle-up"></div>
                  
              </div>
              <Hr/>
            </div>

    </div>
  
  <div class="basis-2/4">
    <Hr/>
    <iframe  class=" d-flex max-w-full max-h-full w-full h-full" src="https://ukalus.dev" scrolling="no" title="Cube" frameborder="0" width="500" height="500"></iframe>
    <Hr/>

  </div>
</div>




<style>
.polka-bg{
  background-image: 
    radial-gradient(#dddddd 20%, transparent 20%);
  background-position: 0 0, 10px 10px;
  background-size: 20px 20px;
}
.circle {
  height: 50px;
  width: 50px;
  background-color: #ED3939;
  border-radius: 50%;
}
.square {
  height: 50px;
  width: 50px;
  background-color: #302CED;
}
.triangle-up {
	width: 0;
	height: 0;
	border-left: 25px solid transparent;
	border-right: 25px solid transparent;
	border-bottom: 50px solid #59C376;
}
.triangle-down {
	width: 0;
	height: 0;
	border-left: 25px solid transparent;
	border-right: 25px solid transparent;
	border-top: 50px solid #E0A100;
}
</style>
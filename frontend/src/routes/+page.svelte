<script>
	import SimpleText from "src/components/SimpleText.svelte";

</script>
<div class="flex flex-row gap-8">
    <div class="items-center pb-40 basis-2/4">
            <hr class="w-[75%]">
            <div class="flex flex-col gap-3 w-[50%] py-10">
                <div class="py-2 bg-teal-400 w-[25%]"></div>
                <div class="py-2 bg-red-600"></div>
                <div class="py-2 bg-blue-600 w-[45%]"></div>
            </div>
            <hr class="w-[50%]">
            <div>
                <h2 class="text-4xl font-bold py-4 border-none">Hello, my name is <a href="./" class="text-teal-400">Ukalus</a></h2>
                <h2 class="text-4xl font-bold py-4 border-none">Im a <a href="./" class="text-red-600">Web Developer</a> and <a href="./" class="text-indigo-600">Digital Artist</a></h2>
                <h2 class="text-4xl font-bold py-4 border-none">Check out some of my <a href="./" class="text-orange-400">Projects</a></h2>
            </div>
            
            
            <div class="polka-bg w-full py-12 my-5"></div>
            <div class="flex flex-row gap-5 pt-4">
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
            

    </div>
    <div class="basis-2/4">
        <iframe class="absolute d-flex w-[40vw] h-[80vh]" src="http://localhost:8080/projects/RubixCube/index.html" scrolling="no" title="Cube" frameborder="0" width="500" height="500"></iframe>

       
        <div class="h-[50vh] py-4 m-0">
            <div class="polka-bg   h-[54%]"></div>
            <div class="bg-gray-100 h-[46%] rounded-tl-full rounded-br-full"></div>

        </div>
        <div class="polka-bg   h-[30%]"></div>

    </div>

   
</div>

<hr class="py-12">

<SimpleText title={"Combining interests"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}>

</SimpleText>

<br class="my-[15vh]">

<div class="px-[25vw]">
  <SimpleText title={"Combining interests"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}>

  </SimpleText>
</div>




<style>
.polka-bg{
  background-image: 
    radial-gradient(#dddddd 20%, transparent 20%);
  background-color: #ffffff;
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
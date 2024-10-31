<script lang="ts">
	import { P } from "flowbite-svelte";
	import Pokeimage from "./Pokeimage.svelte"
	let searchname: string;
	let pokelistpromise = catchpokemon("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151");
	async function catchpokemon(api_link: string){
		const res = await fetch(api_link);
		const data = await res.json();

		if(res.ok){
			
			return(data);
		}
		else{
			throw new Error(data);
		}
		
	}

</script>

<main>
	<div class="centerpokedex pokedex">
		<P><h1 class="container">Pokedex</h1></P>
		<input class="container searchbar" bind:value={searchname} placeholder="Type in your pokemon">
		{#await pokelistpromise}
			<p>... loading</p>
		{:then pokelist}
			{#each pokelist.results as pokemon}
				{#if pokemon.name.includes(searchname)}
				<Pokeimage link="{pokemon.url}"></Pokeimage>
				{/if}
			{/each}
		{:catch error}
			<p>error</p>
		{/await}
	</div>
	


</main>



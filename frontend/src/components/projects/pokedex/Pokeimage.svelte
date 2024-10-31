<script>
	import { Accordion, AccordionItem, P } from "flowbite-svelte";

    export let link;
    let pokemonpromise = current_pokemon(link);
    async function current_pokemon(api_link){
		const res = await fetch(api_link);
		const pokemon_data = await res.json();
		

		if(res.ok){
			
			return(pokemon_data);
		}
		else{
			throw new Error(pokemon_data);
		}
		
	}
	
</script>



{#await pokemonpromise }
    ..loading
{:then pokemondetails}


<!-- Pokemon Characteristics -->
<div class="centercharacter container">
	<P class="container">No.{pokemondetails.id} {pokemondetails.name}</P>
	{#each pokemondetails.types as types }
	<P class="container">{types.type.name}</P>
	{/each}
	<div class="img pokeimg">
	<img src="{pokemondetails.sprites.front_default}" alt="error"> 
	</div>
	<P class="container">weight: {pokemondetails.weight} lbs</P>
	<P class="container">height: {pokemondetails.height} inches</P>
</div>
	<!-- Stats and Attacks -->
	<Accordion >
		<AccordionItem>
		  <span slot="header">Stats</span>
		  	{#each pokemondetails.stats as stats }
				<P>{stats.stat.name}:</P>
				<P>{stats.base_stat}:</P>
			{/each}
		</AccordionItem>
		<AccordionItem>
			<span slot="header">Attacks</span>
			{#each pokemondetails.moves as moves }
				<P>{moves.move.name}</P>
			{/each}
		</AccordionItem>
	</Accordion>
{/await}

<style>

.pokeimg{
	-webkit-transform: scaleX(-1);
	transform: scaleX(-1);
	background-color: white;
	width: 96px;
	border-radius: 50px;
	margin: 16px;
	border: 4px rgb(136, 136, 136);
}
.pokeimg:hover{
	-webkit-transform: scaleX(1);
	transform: scaleX(1);
	background-color: white;
	width: 96px;
	border-radius: 50px;
	margin: 16px;
}
</style>

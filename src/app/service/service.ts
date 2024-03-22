import { Pokemon, PokemonResult, ResponsePokemon } from "@/src/types/types"

export async function getPokemons() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0");
    const data : {results: Array<PokemonResult> }= await res.json();
    const finalData = Promise.all(data.results.map(async (pkm: PokemonResult) => {
        const response = await fetch(pkm.url);
        const res: Pokemon[] = await response.json();
        return {  
            name: pkm.name,
            details: [res]
        }
    }));
    return finalData;
}


export async function getPokemon(id: number) {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/"+id);
    const data = await res.json();
    return data as Pokemon[];
}
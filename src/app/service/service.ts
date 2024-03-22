import { Pokemon, PokemonResult, ResponsePokemon } from "@/src/app/types/types";

export async function getPokemons(): Promise<ResponsePokemon[]> {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0");
    const data: { results: Array<PokemonResult> } = await res.json();
    
    const finalData: ResponsePokemon[] = await Promise.all(data.results.map(async (pkm: PokemonResult) => {
        const response = await fetch(pkm.url);
        const r = await response.json();
        return {
            name: pkm.name,
            details: r
        };
    }));
    
    return finalData;
}

export async function getPokemon(id: number): Promise<Pokemon> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return data as Pokemon;
}

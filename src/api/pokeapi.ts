import {Pokemon} from "@/types/pokemon";


export async function getPoke(pokemon: string): Promise<Pokemon> {
  return await (await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)).json();
}

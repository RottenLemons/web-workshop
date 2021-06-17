import {Pokemon} from "@/types/pokemon";
import {Moves} from "@/types/moves";


export async function getPoke(pokemon: string): Promise<Pokemon> {
  return await (await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)).json();
}


export async function getMove(move: string): Promise<Moves> {
  return await (await fetch(`https://pokeapi.co/api/v2/move/${move}/`)).json();
}

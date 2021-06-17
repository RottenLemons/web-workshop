import {getRepos, getUser} from "@/api/api";
import {getMove, getPoke} from "@/api/pokeapi";

async function main(): Promise<string> {
  const name = "junron";
  const user = await getUser(name);
  const repos = await getRepos(name);
  const starredRepos = repos.filter(repo => {
    return repo.stargazers_count > 0;
  });
  const repoNames = repos.map(repo => repo.name)
    .join(", ");
  const pokemon = await getPoke("mew");
  const move = await getMove("pound");
  return `${pokemon.name}, which has an id of ${pokemon.id} and an order of ${pokemon.order}, has a height of ${pokemon.height}.
  \n It has the move ${move.name} which has an id of ${move.id}. The accuracy of the move is ${move.accuracy} and it has a power of ${move.power}. The number of times this move can be used is ${move.pp}`;
}

export default {
  main
};

import {getRepos, getUser} from "@/api/api";
import {getPoke} from "@/api/pokeapi";

async function main(): Promise<string> {
  const name = "junron";
  const user = await getUser(name);
  const repos = await getRepos(name);
  const starredRepos = repos.filter(repo => {
    return repo.stargazers_count > 0;
  });
  const repoNames = repos.map(repo => repo.name)
    .join(", ");
  const pokemon = await getPoke("ditto");
  return `${pokemon.name}, which has an id of ${pokemon.id} and an order of ${pokemon.order}, has a height of ${pokemon.height}.`;
}

export default {
  main
};

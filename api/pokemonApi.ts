const getPokemons = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
  const json = await res.json();
  return json;
};

const getPokemon = async (id: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const json = await res.json();
  return json;
};

export { getPokemon, getPokemons };

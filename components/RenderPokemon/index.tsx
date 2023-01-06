import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import Card from "../Card";

import Styles from "./index.module.scss";

type PokemonType = {
  name: string;
  url: string;
};

export default function RenderPokemon({
  pokemon,
}: {
  pokemon: Array<PokemonType>;
}) {
  return (
    <div className={Styles.container}>
      {pokemon.map((pokemon, index) => {
        return (
          <div className={Styles.items} key={index}>
            <Card name={pokemon.name} url={pokemon.url} />
          </div>
        );
      })}
    </div>
  );
}

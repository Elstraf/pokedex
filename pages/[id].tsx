import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import Button from "../components/Button";
import Container from "../components/Container";
import PokemonPageContainer from "../components/PokemonPageContainer";
import PokemonPageLayout from "../components/PokemonPageLayout";

import Styles from "./index.module.scss";

const MinMaxPokemon = [1, 155];
export default function PokemonPage({
  pokemon,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { id, name, types } = pokemon;

  const handleClick = (value: number) => {
    const newId = Number(id) + value;
    if (newId < MinMaxPokemon[0] || newId > MinMaxPokemon[1]) return;
    router.push(`/${newId}`);
  };
  return (
    <>
      <PokemonPageContainer type={types[0].type.name}>
        <Container>
          <PokemonPageLayout
            name={name}
            id={id}
            image={pokemon.sprites.other.dream_world.front_default}
            stats={pokemon.stats}
          />

          <div className={Styles.buttonContainer}>
            {id > MinMaxPokemon[0] ? (
              <Button
                handleClick={() => handleClick(-1)}
                name="Previous Pokemon"
              />
            ) : (
              <></>
            )}
            {id < MinMaxPokemon[1] ? (
              <Button handleClick={() => handleClick(1)} name="Next Pokemon" />
            ) : (
              <></>
            )}
          </div>
        </Container>
      </PokemonPageContainer>
    </>
  );
}

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params?.id}`);
  const pokemon = await res.json();

  return {
    props: {
      pokemon,
    },
  };
}

import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import Card from "../../components/Card";
import api from "../../services/api";
import * as S from "./styles";

export interface PokemonTypeProps {
  type: string;
}

export interface PokemonProps {
  name: string;
  url: string;
  id: number;
  types: PokemonTypeProps[];
}

interface Request {
  id: number;
  types: PokemonTypeProps[];
}

export default function Home() {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  useEffect(() => {
    async function getAllPokemon() {
      const response = await api.get("pokemon");

      const { results } = response.data;

      const payLoadPokemon = await Promise.all(
        results.map(async (pokemon: PokemonProps) => {
          const { id, types } = await getMoreInfo(pokemon.url);

          return {
            name: pokemon.name,
            id,
            types,
          };
        })
      );
      setPokemons(payLoadPokemon);
    }

    getAllPokemon();
  }, []);

  async function getMoreInfo(url: string): Promise<Request> {
    const response = await api.get(url);

    const { id, types } = response.data;
    // types[0].type.name
    return {
      id,
      types,
    };
  }

  return (
    <S.Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.id.toString()}
        renderItem={({ item: pokemon }) => <Card data={pokemon} />}
      />
    </S.Container>
  );
}
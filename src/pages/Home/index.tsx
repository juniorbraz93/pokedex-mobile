import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Card, { PokemonProps, PokemonTypeProps } from "../../components/Card";
import api from "../../services/api";
import * as S from "./styles";

import pokebellHeader from "../../assets/img/pokeball.png";

interface Request {
  id: number;
  types: PokemonTypeProps[];
}

export default function Home() {
  const { navigate } = useNavigation();
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function getAllPokemon() {
      const response = await api.get("pokemon?limit=150&offset=0");

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
      setLoad(false);
    }

    getAllPokemon();
  }, []);

  async function getMoreInfo(url: string): Promise<Request> {
    const response = await api.get(url);

    const { id, types } = response.data;
    return {
      id,
      types,
    };
  }

  function handleNavigation(pokemonId: number) {
    navigate("Detail", {
      pokemonId,
    });
  }

  return (
    <>
      {load ? (
        <S.LoadContainer>
          <S.Text>Carregando...</S.Text>
        </S.LoadContainer>
      ) : (
        <S.Container>
          <FlatList
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <>
                <S.Header source={pokebellHeader} />
                <S.Title>Pokédex</S.Title>
              </>
            }
            contentContainerStyle={{
              paddingHorizontal: 20,
            }}
            data={pokemons}
            keyExtractor={(pokemon) => pokemon.id.toString()}
            renderItem={({ item: pokemon }) => (
              <Card
                data={pokemon}
                onPress={() => {
                  handleNavigation(pokemon.id);
                }}
              />
            )}
          />
        </S.Container>
      )}
    </>
  );
}

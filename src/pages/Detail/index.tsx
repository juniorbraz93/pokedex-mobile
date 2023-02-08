import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import api from "../../services/api";
import { useTheme } from "styled-components";
import { Alert, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

import cicle from "../../assets/img/circle.png";

type RouteParams = {
  pokemonId: number;
};

type StatsProps = {
  base_stat: number;
  stat: {
    name: string;
  };
};

type AbilityProps = {
  ability: {
    name: string;
  };
};

export type TypeName =
  | "bug"
  | "dark"
  | "dragon"
  | "electric"
  | "fairy"
  | "fighting"
  | "fire"
  | "flying"
  | "ghost"
  | "grass"
  | "ground"
  | "ice"
  | "normal"
  | "poison"
  | "psychic"
  | "rock"
  | "steel"
  | "water";

type PokemonTypeProps = {
  type: {
    name: TypeName;
  };
};

type PokemonProps = {
  id: number;
  name: string;
  stats: StatsProps[];
  abilities: AbilityProps[];
  color: string;
  types: PokemonTypeProps[];
};

export default function Detail() {
  const route = useRoute();
  const { colors } = useTheme();
  const { pokemonId } = route.params as RouteParams;

  const [pokemon, setPokemon] = useState({} as PokemonProps);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function getPokemonDetail() {
      try {
        const response = await api.get(`/pokemon/${pokemonId}`);

        const { stats, abilities, id, name, types } = response.data;

        const currentType = types[0].type.name as TypeName;
        const color = colors.backgroundTypes[currentType];

        setPokemon({
          stats,
          abilities,
          id,
          name,
          types,
          color,
        });
      } catch (error) {
        Alert.alert("Ops, ocorreu um erro, tente mais tarde");
      } finally {
        setLoad(false);
      }
    }

    getPokemonDetail();
  }, [pokemonId]);

  return (
    <>
      {load ? (
        <>
          <S.Text>Carrgando...</S.Text>
        </>
      ) : (
        <ScrollView style={{ flex: 1 }}>
          <S.Header type={pokemon.types[0].type.name}>
            <S.BackButtom>
              <Feather name="chevron-left" size={24} color="#FFF" />
            </S.BackButtom>
            <S.ContentImage>
              <S.CircleImage source={cicle} />
              <S.PokemonImage
                source={{
                  uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
                }}
              />
            </S.ContentImage>
          </S.Header>
        </ScrollView>
      )}
    </>
  );
}

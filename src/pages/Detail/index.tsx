import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import api from "../../services/api";
import { useTheme } from "styled-components";
import { Alert, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

import cicle from "../../assets/img/circle.png";
import FadeAnimation from "../../components/FadeAnimation";
import dots from "./img/dots.png";

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
  const { goBack } = useNavigation();
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

  function handleGoBack() {
    goBack();
  }

  function addZeroes(num: number, len: number) {
    let numberWithZeroes = String(num);
    let counter = numberWithZeroes.length;

    while (counter < len) {
      numberWithZeroes = "0" + numberWithZeroes;

      counter++;
    }

    return numberWithZeroes;
  }

  return (
    <>
      {load ? (
        <S.LoadContainer>
          <S.Text>Carregando...</S.Text>
        </S.LoadContainer>
      ) : (
        <ScrollView style={{ flex: 1, backgroundColor: "#FFF" }}>
          <S.Header type={pokemon.types[0].type.name}>
            <S.BackButtom onPress={handleGoBack}>
              <Feather name="chevrons-left" size={24} color="#FFF" />
            </S.BackButtom>
            <S.ContentImage>
              <S.CircleImage source={cicle} />
              <FadeAnimation>
                <S.PokemonImage
                  source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
                  }}
                />
              </FadeAnimation>
            </S.ContentImage>
            <S.Content>
              <FadeAnimation>
                <S.PokemonId>#{addZeroes(pokemon.id, 3)}</S.PokemonId>
                <S.PokemonName>{pokemon.name}</S.PokemonName>

                <S.PokemonTypeContainer>
                  {pokemon.types.map(({ type }) => (
                    <S.PokemonType key={type.name} type={type.name as TypeName}>
                      {/* <S.BadgeIcon
                      source={{
                        uri: `../../assets/img/bug.svg`,
                      }}
                    /> */}
                      <S.PokemonTypeText>{type.name}</S.PokemonTypeText>
                    </S.PokemonType>
                  ))}
                </S.PokemonTypeContainer>
              </FadeAnimation>
            </S.Content>
            <S.DotImage source={dots} />
          </S.Header>

          <S.Container>
            <S.Title type={pokemon.types[0].type.name}>Base States</S.Title>

            {pokemon.stats.map((attribute) => (
              <S.StatusBar key={attribute.stat.name}>
                <S.Attribute> {attribute.stat.name} </S.Attribute>
                <S.AttributeValue>{attribute.base_stat}</S.AttributeValue>
                <S.ContentBar>
                  <S.ProgressBar
                    type={pokemon.types[0].type.name}
                    borderWidth={0}
                    progress={100}
                    width={attribute.base_stat}
                    color={pokemon.color}
                  />
                </S.ContentBar>
              </S.StatusBar>
            ))}

            <S.Title type={pokemon.types[0].type.name}>Abilities</S.Title>

            {pokemon.abilities.map((currentAbility) => (
              <S.Ability key={currentAbility.ability.name}>
                {currentAbility.ability.name}
              </S.Ability>
            ))}
          </S.Container>
        </ScrollView>
      )}
    </>
  );
}

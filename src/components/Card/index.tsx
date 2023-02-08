import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

import dotsImage from "../../assets/img/dots.png";
import pokeball from "../../assets/img/pokeballCard.png";
import FadeAnimation from "../FadeAnimation";
import { TypeName } from "../../pages/Detail";

export type PokemonTypeProps = {
  type: {
    name: string;
  };
};

export type PokemonProps = {
  name: string;
  url: string;
  id: number;
  types: PokemonTypeProps[];
};

type CardProps = {
  data: PokemonProps;
} & TouchableOpacityProps;

export default function Card({ data, ...rest }: CardProps) {
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
    <S.Container type={data.types[0].type.name as TypeName} {...rest}>
      <S.LeftSide>
        <S.PokemonId> #{addZeroes(data.id, 3)} </S.PokemonId>
        <S.PokemonName> {data.name} </S.PokemonName>
        <S.ImageCardLeftSide source={dotsImage} />

        <S.PokemonContentTypes>
          {data.types.map((pokemonType) => (
            <S.PokemonType
              key={pokemonType.type.name}
              type={pokemonType.type.name as TypeName}
            >
              <S.BadgeIcon href={`../../assets/img/bug.svg`} />
              <S.PokemonTypeText>{pokemonType.type.name}</S.PokemonTypeText>
            </S.PokemonType>
          ))}
        </S.PokemonContentTypes>
      </S.LeftSide>
      <S.RightSide>
        <FadeAnimation>
          <S.PokeballDetail source={pokeball} />
          <S.PokemonImage
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
            }}
          />
        </FadeAnimation>
      </S.RightSide>
    </S.Container>
  );
}

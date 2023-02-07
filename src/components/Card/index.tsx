import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

import dotsImage from "../../assets/img/dots.png";

interface PokemonTypeProps {
  type: any;
  name: string;
}

interface PokemonProps {
  name: string;
  url: string;
  id: number;
  types: PokemonTypeProps[];
}

type CardProps = {
  data: PokemonProps;
} & TouchableOpacityProps;

export default function Card({ data, ...rest }: CardProps) {
  return (
    <S.Container type={data.types[0].type.name} {...rest}>
      <S.LeftSide>
        <S.PokemonId> #{data.id} </S.PokemonId>
        <S.PokemonName> {data.name} </S.PokemonName>
        <S.ImageCardLeftSide source={dotsImage} />

        <S.PokemonContentTypes>
          {data.types.map((pokemonType) => (
            <S.PokemonType
              key={pokemonType.type.name}
              type={pokemonType.type.name}
            >
              <S.PokemonTypeText>{pokemonType.type.name}</S.PokemonTypeText>
            </S.PokemonType>
          ))}
        </S.PokemonContentTypes>
      </S.LeftSide>
      <S.RightSide></S.RightSide>
    </S.Container>
  );
}

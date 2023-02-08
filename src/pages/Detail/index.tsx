import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import * as S from "./styles";

type RouteParams = {
  pokemonId: number;
};

export default function Detail() {
  const route = useRoute();
  const { pokemonId } = route.params as RouteParams;

  return (
    <S.Container>
      <S.Text>{pokemonId}</S.Text>
    </S.Container>
  );
}

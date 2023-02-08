import React from "react";
import AnimatedLottieView from "lottie-react-native";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const { navigate } = useNavigation();

  function handlerNavigation() {
    navigate("Home");
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Bem Vindo</S.Title>
        <S.SubTitle>Encontre todos os pokemons em um só lugar</S.SubTitle>
      </S.Header>
      <S.Content>
        <AnimatedLottieView
          autoPlay
          source={require("./pokeball.json")}
          style={{ width: 200 }}
          loop
        />
      </S.Content>
      <S.Footer>
        <S.Button onPress={handlerNavigation}>
          <S.ButtonText>Entrar</S.ButtonText>
        </S.Button>
      </S.Footer>
    </S.Container>
  );
}

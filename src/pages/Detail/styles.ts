import styled, { css } from "styled-components/native";
import { TypeName } from ".";

import * as Progress from "react-native-progress";
import { LinearGradient } from "expo-linear-gradient";

type TypeProps = {
  type: TypeName;
};

export const Header = styled.View<TypeProps>`
  ${({ theme, type }) => css`
    background-color: ${theme.colors.backgroundTypes[type]};
    height: 340px;
    padding: 20px;

    align-items: center;
    flex-direction: row;

    position: relative;
  `}
`;
export const BackButtom = styled.TouchableOpacity`
  position: absolute;
  top: 70px;
  left: 40px;
`;
export const ContentImage = styled.View`
  position: relative;
`;
export const CircleImage = styled.Image`
  width: 125px;
  height: 125px;
  position: absolute;
`;
export const PokemonImage = styled.Image`
  width: 125px;
  height: 125px;
  /* position: absolute; */
`;

export const Content = styled.View`
  margin-left: 30px;
`;

export const PokemonId = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text.lightGray};
    font-size: 16px;
    line-height: 19px;
    font-style: normal;
    font-weight: bold;
  `}
`;

export const PokemonName = styled.Text`
  ${({ theme }) => css`
      text-transform: capitalize
      color: ${theme.colors.text.White};
      font-size: 28px;
      line-height: 38px;
      font-style: normal;
      font-weight: bold;
  `}
`;

export const PokemonTypeContainer = styled.View`
  flex-direction: row;
`;

export const PokemonType = styled.View<TypeProps>`
  ${({ theme, type }) => css`
    background-color: ${theme.colors.types[type]};
    padding: 5px;
    width: 65px;
    height: 25px;
    border-radius: 3px;
    margin-left: 5px;
    margin-top: 5px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  `}
`;

export const BadgeIcon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const PokemonTypeText = styled.Text`
  ${({ theme }) => css`
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: ${theme.colors.text.White};
    text-transform: capitalize;
  `}
`;

export const DotImage = styled.Image`
  width: 85px;
  position: absolute;
  right: -20px;
  top: 220px;
`;

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundWhite};
    padding: 20px;
    flex: 1;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    margin-top: -40px;
  `}
`;

export const Title = styled.Text<TypeProps>`
  ${({ theme, type }) => css`
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
    line-height: 19px;
    padding: 20px;
    color: ${theme.colors.types[type]};
  `}
`;

export const StatusBar = styled.View`
  width: 100%;
  padding: 10px 20px;
  flex-direction: row;
  align-items: center;
`;

export const Attribute = styled.Text`
  ${({ theme }) => css`
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px;
    width: 110px;
    text-transform: capitalize
    color: ${theme.colors.text.lightGray};
  `}
`;

export const AttributeValue = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
    line-height: 19px;
    text-align: right;
    margin-left: 20px;
    width: 30px;
    color: ${theme.colors.text.detail};
  `}
`;

export const ContentBar = styled.View`
  margin-left: 20px;
`;

export const ProgressBar = styled(Progress.Bar).attrs({})<TypeProps>``;

export const Ability = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    font-style: normal;
    font-weight: normal;
    line-height: 19px;
    padding: 10px 20px;
    color: ${theme.colors.text.detail};
    text-transform: capitalize;
  `}
`;

export const LoadContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

import styled, { css } from "styled-components/native";
import { TypeName } from ".";

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
export const ContentImage = styled.View``;
export const CircleImage = styled.Image``;
export const PokemonImage = styled.Image``;

export const Text = styled.Text`
  margin-top: 200px;
`;

import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.backgroundWhite};
  `}
`;
export const Header = styled.ImageBackground`
  ${({ theme }) => css`
    height: 220px;
    width: ${windowWidth}px;
    background-color: ${theme.colors.backgroundWhite};
    margin-left: -20px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 32px;
    line-height: 38px;
    font-weight: bold;
    color: ${theme.colors.text.lightGray};
  `}
`;

export const LoadContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

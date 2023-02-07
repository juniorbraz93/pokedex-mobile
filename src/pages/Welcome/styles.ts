import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.backgroundBlack};
  `}
`;

export const Content = styled.View`
  height: 40%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 40px;
    color: ${theme.colors.text.White};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    color: ${theme.colors.text.White};
    margin-top: 20px;
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    height: 30%;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: ${theme.colors.backgroundRed};
    justify-content: center;
    align-items: center;
  `}
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    height: 30%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: ${theme.colors.backgroundWhite};
    justify-content: center;
    align-items: center;
  `}
`;

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 80%;
    height: 50px;
    background-color: ${theme.colors.backgroundBlack};
    justify-content: center;
    align-items: center;
    border-radius: 50px;
  `}
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    color: ${theme.colors.text.White};
  `}
`;

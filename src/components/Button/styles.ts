import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    height: 50px;
    background-color: ${theme.colors.backgroundBlack};
    justify-content: center;
    align-items: center;
    /* border-radius: 50%; */
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    color: ${theme.colors.text.textWhite};
  `}
`;

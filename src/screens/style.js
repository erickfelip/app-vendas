import styled from "styled-components";
import { Platform } from "react-native";

export const Container = styled.View`
flex:1;
justify-content: center;
align-items: center;
background-color: ${({theme }) => theme.colors.primary};
padding-top: ${Platform.OS === "android" ? 40 : 80}px;
`
export const Title = styled.Text`
color: ${({theme }) => theme.colors.secondary};
font-size: 24px;
` 

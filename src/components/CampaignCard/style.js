import styled from "styled-components";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
flex: 1;
padding: 0 15px;
margin-top: ${RFValue(1)}px;
background-color: ${({ theme }) => theme.colors.teste};
` 

export const Title = styled.Text`
color: ${({ theme }) => theme.colors.secondary};
padding-top: 5px;
font-size: ${RFValue(18)}px;
font-family: ${({ theme }) => theme.fonts.bold};
` 

export const InnerContainer = styled.View`
border-radius: 15px;
flex: 1;
margin-top: ${RFValue(7)}px;
background-color: ${({ theme }) => theme.colors.teste2};
`

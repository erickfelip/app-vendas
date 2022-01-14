import styled from "styled-components";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

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
margin-bottom: ${RFValue(5)}px;
margin-top: ${RFValue(5)}px;
background-color: ${({ theme }) => theme.colors.teste2};
`

export const Button = styled(RectButton)`
  width: ${RFPercentage(6)}px;
  height: ${RFPercentage(6)}px;
  background-color: ${({ theme }) => theme.colors.teste};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const Teste = styled.View`
align-items: flex-end;
flex: 1;
padding: 1px;
margin-top: ${RFValue(1)}px;
` 

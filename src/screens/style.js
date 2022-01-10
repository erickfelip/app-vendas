import styled from "styled-components";
import { Platform } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
flex:1;
background-color: ${({theme }) => theme.colors.secondary};
`
export const Header = styled.View`
align-items: center;
justify-content: center;
flex-direction: row;
padding-top: ${Platform.OS === "android" ? 60 : 80}px;
background-color: ${({theme }) => theme.colors.primary};
width: 100%;
height: ${RFPercentage(20)}px;
` 

export const MapContainer = styled.View`
padding-top: ${Platform.OS === "android" ? 80 : 80}px;
background-color: ${({theme }) => theme.colors.header};
width: 100%;
height: ${RFPercentage(60)}px;
`


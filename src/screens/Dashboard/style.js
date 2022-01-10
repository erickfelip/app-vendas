import styled from "styled-components";
import { Platform } from "react-native";
import { AntDesign  } from '@expo/vector-icons'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
export const Header = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-top: ${Platform.OS === "android" ? 25 : 80}px;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: ${RFPercentage(20)}px;
`;

export const MapContainer = styled.View`
  padding-top: ${Platform.OS === "android" ? 60 : 80}px;
  background-color: ${({ theme }) => theme.colors.header};
  width: ${RFPercentage(60)}px;
  height: ${RFPercentage(50)}px;
`;
export const UserWrapper = styled.View`
  height: ${RFValue(80)}px;
  width: 100%;
  padding: 0 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 50px;
`;

export const User = styled.View`
  margin-left: 15px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Icon = styled(AntDesign)`
color: ${({theme}) => theme.colors.secondary};
font-size: ${RFValue(24)}px;
` 

export const Transactions = styled.View`
flex: 1;
padding: 0 15px;
margin-top: ${RFValue(15)}px;
`

export const Title = styled.Text`
font-size: ${RFValue(18)}px;
font-family: ${({ theme }) => theme.fonts.bold};
  ` 
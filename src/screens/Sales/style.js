import styled from "styled-components";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-top: ${Platform.OS === "android" ? 25 : 80}px;
  background-color: ${({ theme }) => theme.colors.teste};
  width: 100%;
  height: ${RFPercentage(20)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

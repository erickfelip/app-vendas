import React from "react";
import { Text, View } from "react-native";
import {
  Container,
  Header,
  MapContainer,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
} from "./style";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/68874188?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Erick</UserName>
            </User>
          </UserInfo>
        </UserWrapper>
      </Header>
      <MapContainer></MapContainer>
    </Container>
  );
}

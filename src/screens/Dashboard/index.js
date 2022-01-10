import React from "react";
import { AntDesign  } from '@expo/vector-icons'

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
  Icon
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
        <Icon name='logout'/>
        </UserWrapper>
      </Header>
      <MapContainer></MapContainer>
    </Container>
  );
}

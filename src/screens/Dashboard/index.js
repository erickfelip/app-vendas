import React from "react";
import { CampaignCard } from "../../components/CampaignCard";

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
  Icon,
  Transactions,
  Title
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
      <MapContainer>
      </MapContainer>
      <Transactions>
          <Title> Campanha</Title>
          <CampaignCard/>
      </Transactions>
    </Container>
  );
}

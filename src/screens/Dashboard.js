import React from 'react'
import { Text, View } from 'react-native'
import { Container, Header, MapContainer } from './style'

export function Dashboard(){
    return(
        <Container>
            <Header>
              <UserInfo>
                  <Photo/>
                  <User>
                      <UserGreeting>Olá, </UserGreeting>
                  </User>


              </UserInfo>
            </Header>
            <MapContainer>
            </MapContainer>
        </Container>
    )
}
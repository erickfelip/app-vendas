import React,{useState, useEffect, useRef } from "react";
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
import MapView from 'react-native-maps'
import * as Location from 'expo-location';
import { Modalize } from 'react-native-modalize';
import { TouchableOpacity, Text} from 'react-native'



export function Dashboard() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const modalizeRef = useRef(null);

  function onOpen(){
    modalizeRef.current?.open()
  }


  useEffect(() => {
    (async () => {
      let  { status }  = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
      });
    })();
  },[]);
  console.log(location)

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
        <MapView style={{flex:1}}
        initialRegion={location}
        showsUserLocation={true}
        loadingEnable={true}
        />
      </MapContainer>
      <CampaignCard/>
  
      <TouchableOpacity
      onPress={onOpen}>
        <Text>
          TESTE
        </Text>
      </TouchableOpacity>
      <Modalize
      ref={modalizeRef}
      snapPoint={500}
      >
      </Modalize>
    </Container>
  );
}

import React, {useRef} from 'react'
import { Container, Title, InnerContainer, Button, Teste } from './style'
import { AntDesign } from '@expo/vector-icons';
import { Modalize } from "react-native-modalize";
import { TouchableOpacity, View, Text} from "react-native";
import  {PanGestureHandler} from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';



export function CampaignCard(){
    const modalizeRef = useRef(null);

    function onOpen(){
      modalizeRef.current?.open();
    }
    function onClose(){
        modalizeRef.current?.close();
      }
    return(
        
    <>
    {/* <Button onPress={onOpen}> */}
   <TouchableOpacity
   onPress={onOpen} >
    <AntDesign name="plus" size={28} color="black" style={{justifyContent:'center'}} />
  {/*   </Button> */}
  </TouchableOpacity>
    <Modalize ref={modalizeRef} snapPoint={500}
  >
    <Teste>
    <Feather onPress={onClose}name="x" size={28} color="black" style={{padding:20, justifyContent: 'flex-end'}} />
    </Teste>
    </Modalize>
    </>
    )
}


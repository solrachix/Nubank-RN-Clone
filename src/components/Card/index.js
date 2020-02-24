import React from 'react';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';


import Icon from "@expo/vector-icons/MaterialIcons";

import { CardContainer, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './style';

export default function Card({translateY}){
  let offset = 0;
  const animatedEvent = new Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    { useNativeDriver: true },
  );
  const onHandlerStateChange = (event) => {
    if(event.nativeEvent.oldState === State.ACTIVE){
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if(translationY >= 100){
        opened = true
      } else{
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380: 0,
        duration: 200,
        useNativeDriver: true
      }).start(() => {
        offset = opened? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }
  return (
    <PanGestureHandler 
      onGestureEvent={animatedEvent}
      onHandlerStateChange={onHandlerStateChange}
    >

      <CardContainer style={{
        transform: [{
          translateY: translateY.interpolate({
            inputRange: [-350, 0, 380],
            outputRange: [-50, 0, 380],
            extrapolate: 'clamp'
          }),
        }]        
      }}>
        <CardHeader>
          <Icon name="attach-money" size={28} color="#666"/>
          <Icon name="visibility-off" size={28} color="#666"/>
        </CardHeader>
        <CardContent>
          <Title>Saldo disponivel</Title>
          <Description>R$ 1.998.651,85</Description>
        </CardContent>
        <CardFooter>
            <Annotation>Transferencia de R$ 2.000.000,00 recebido de Carlos Miguel</Annotation>
        </CardFooter>
      </CardContainer>

    </PanGestureHandler>
  );
}
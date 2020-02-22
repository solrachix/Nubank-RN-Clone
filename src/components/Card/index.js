import React from 'react';

import Icon from "@expo/vector-icons/MaterialIcons";

import { CardContainer, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './style';

export default function Card(){
  return (
    <CardContainer>
      <CardHeader>
        <Icon name="attach-money" size={28} color="#666"/>
        <Icon name="visibility-off" size={28} color="#666"/>
      </CardHeader>
      <CardContent>
        <Title>Saldo disponivel</Title>
        <Description>R$ 197.611,65</Description>
      </CardContent>
      <CardFooter>
          <Annotation>Transferencia de R$ 20,00 recebido de Carlos Miguel</Annotation>
      </CardFooter>
    </CardContainer>
  );
}
import React from "react";

import Icon from "@expo/vector-icons/MaterialIcons";

import { Container, TabsContainers, TabItem, TabText } from './style';

export default function Tabs(){
  return(
    <Container>
      <TabsContainers>

        <TabItem>
          <Icon name="person-add" size={24} color="#fff"/>
          <TabText>Indicar Amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#fff"/>
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-downward" size={24} color="#fff"/>
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-upward" size={24} color="#fff"/>
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={24} color="#fff"/>
          <TabText>Bloquear cartão</TabText>
        </TabItem>

      </TabsContainers>
    </Container>
  );
}
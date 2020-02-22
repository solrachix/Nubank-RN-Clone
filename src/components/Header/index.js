import React from "react";

import { Container, Top, Logo, Title } from './style';

import Icon from "@expo/vector-icons/MaterialIcons";

import logo from '$root/assets/Nubank_Logo.png';

export default function Header(){
  return(
    <Container>
      <Top>
        <Logo source={logo}/>
        <Title>Carlos</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#fff"/>
    </Container>
  );
}
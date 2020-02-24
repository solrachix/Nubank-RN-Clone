import React from "react";

import QRCode from "react-native-qrcode-svg";
import Icon from "@expo/vector-icons/MaterialIcons";

import logo from '$root/assets/Nubank_Logo.png';
import { Container, Code, Nav, NavItem, NavText, SigOutButton, SigOutButtonText } from "./style";

export default function Menu({ translateY }){
  return(
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1]
      })
    }}>
      <Code>
        <QRCode 
          value="https://github.com/solrachix"
          logo={logo}
          size={80}
          color="#FFF"
          backgroundColor="#8B10AE"
        />
      </Code>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF"/>
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF"/>
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF"/>
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF"/>
          <NavText>Configurações do App</NavText>
        </NavItem>
      </Nav>

      <SigOutButton onPress={()=>{}}>
        <SigOutButtonText>Sair do App</SigOutButtonText>
      </SigOutButton>
    </Container>
  );
}
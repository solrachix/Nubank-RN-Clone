import * as React from 'react';
import { Animated } from 'react-native';

import Header from '$root/components/Header';
import Tabs from '$root/components/Tabs';
import Card from '$root/components/Card';
import Menu from '$root/components/Menu';

import { Container, Content } from './style'

export default function Home() {
  const translateY = new Animated.Value(0);

  return (
    <Container>
      <Header/>

      <Content>
        <Menu translateY={translateY}/>
        <Card translateY={translateY}></Card>
      </Content>

      <Tabs translateY={translateY}/>
    </Container>
  );
}
import * as React from 'react';

import Header from '$root/components/Header';
import Tabs from '$root/components/Tabs';
import Card from '$root/components/Card';
import Menu from '$root/components/Menu';

import { Container, Content } from './style'

export default function Home() {

  return (
    <Container>
      <Header/>

      <Content>
        <Menu></Menu>
        <Card></Card>
      </Content>

      <Tabs/>
    </Container>
  );
}
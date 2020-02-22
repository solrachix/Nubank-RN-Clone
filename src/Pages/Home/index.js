import * as React from 'react';
import { View } from 'react-native';

import TypeWriter from 'react-native-typewriter'

import { ConsoleContainer, Text } from './style';

export default function Home() {
  const frases = [
    'Welcome to the react native world.'
  ];

  function renderText(text){
    const style = {
      textAlign: "center"
    }
    const onEnd = () => {
    }
    return (
      <TypeWriter style={style} key={text} onTypingEnd={onEnd} minDelay={100} typing={1}>
        <Text>{text}</Text>
      </TypeWriter>
    );
  }

  return (
    <ConsoleContainer>
        {frases.map(frase => (
          renderText(frase)
        ))}
    </ConsoleContainer>
  );
}
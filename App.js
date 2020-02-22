import 'react-native-gesture-handler';
import React from 'react';
import  { StatusBar } from 'react-native';

import Routes from './src/Routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8B10AE"/>
      <Routes/>
    </>
  );
}
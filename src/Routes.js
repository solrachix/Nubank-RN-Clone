import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '$root/Pages/Home';

const { Screen, Navigator } = createStackNavigator();

function Routes() {
  return (

    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home}
        options={{
          title: 'My app',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#7d40e7',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }} />

      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
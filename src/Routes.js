import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FaHome } from 'react-icons/fa';

import Home from '$root/Pages/Home';

const { Screen, Navigator } = createBottomTabNavigator();

function Routes() {
  return (

    <NavigationContainer>
      <Navigator 
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}>
        <Screen name="Home" component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <FaHome name="home" color={color} size={size} />
            ),
          }}/>

      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SignIn} from '../screens/signIn';
import {Basics} from '../screens/basics';
import {Buttons} from '../screens/buttons';
const Stack = createStackNavigator();

export const MainScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Buttons"
          component={Buttons}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Basics"
          component={Basics}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

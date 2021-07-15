import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SignUp} from '../screens/signUp';
import {Basics} from '../screens/basics';
import {Buttons} from '../screens/buttons';
import {SignIn} from '../screens/signIn';
import {Dashboard, Settings} from '../screens/dashboard';
import {Details, List, ScrollTest} from '../screens/list';
import {DrawerNavigator} from './DrawerNavigator';
import {SplashScreen} from '../screens/splashScreen';
import {TabNavigator} from './TabNavigator';
import {LearnCalendar} from '../screens/learnCalander';
const Stack = createStackNavigator();

export const MainScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LearnCalendar"
          component={LearnCalendar}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        /> */}

        <Stack.Screen
          name="List"
          component={List}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ScrollTest"
          component={ScrollTest}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
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

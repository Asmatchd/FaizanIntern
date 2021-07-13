import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DrawerNavigator} from './DrawerNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {Switches} from '../screens/basics/Switches';
const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#000',
        showLabel: false,
        tabStyle: {
          backgroundColor: 'orange',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={DrawerNavigator}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={25} />,
        }}
      />
      <Tab.Screen
        name="Switches"
        component={Switches}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="settings" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

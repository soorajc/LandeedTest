import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CounterEditor from '../screens/CounterEditor';
import WorldClock from '../screens/WorldClock';

const Stack = createStackNavigator();

const AppNavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="CounterEditor" component={CounterEditor} />
        <Stack.Screen name="WorldClock" component={WorldClock} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationStack;

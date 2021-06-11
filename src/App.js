import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  ScrollView
  } from 'react-native';
  import {NavigationContainer} from '@react-navigation/native';
  import{createStackNavigator} from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Screen_import } from './screens/screen_import';
import { Screen_nosotros } from './screens/screen_nosotros';
import { Screen_importedCards } from './screens/screen_importedCards';

const Stack = createStackNavigator();

export default class App extends Component {
 
render(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Screen 1' component={Screen_import}/>
        <Stack.Screen name='Screen 2' component={Screen_importedCards}/>
        <Stack.Screen name='Screen 3' component={Screen_nosotros}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}

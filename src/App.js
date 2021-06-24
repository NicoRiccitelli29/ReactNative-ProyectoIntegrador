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
  import{createDrawerNavigator} from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Screen_import } from './screens/screen_import';
import { Screen_Menu } from './screens/screen_menu';
import { Screen_nosotros } from './screens/screen_nosotros';
import { Screen_importedCards } from './screens/screen_importedCards';
import {Screen_papelera} from './screens/screen_papelera';

const Drawer = createDrawerNavigator();

export default class App extends Component {
 
render(){
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerPosition="left"
        drawerType="slide"
        overlayColor="azure"
        initialRouteName="Menu"
        drawerStyle={{
          width:250,
        }}
        drawerContentOptions ={{
          activeTintColor: "white",
          activeBackgroundColor:  "lightpink" 
        }}
      >
        <Drawer.Screen name='Menu' component={Screen_Menu}/>
        <Drawer.Screen name='Importar tarjetas' component={Screen_import}/>
        <Drawer.Screen name='Tarjetas importadas' component={Screen_importedCards} />
        <Drawer.Screen name='Nosotros' component={Screen_nosotros} />
        <Drawer.Screen name='Papelera' component={Screen_papelera} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
}

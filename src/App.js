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
          activeTintColor: "white",
          activeBackgroundColor:  "lightpink" 
        }}
      >
        <Drawer.Screen name='Screen 0' component={Screen_Menu} option={{title:"Menu"}}/>
        <Drawer.Screen name='Screen 1' component={Screen_import} option={{title:"Importar Tarjetas"}}/>
        <Drawer.Screen name='Screen 2' component={Screen_importedCards} option={{title:"Tarjetas importadas"}}/>
        <Drawer.Screen name='Screen 3' component={Screen_nosotros} option={{title:"Acerca de nosotros..."}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
}

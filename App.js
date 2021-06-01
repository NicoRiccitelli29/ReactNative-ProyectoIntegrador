import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  ScrollView
  } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Screen_import } from './screens/Screen_import';
import { Screen_nosotros } from './Screens/screen_nosotros';


export default class App extends Component {
 
render(){
  return (
    <Screen_nosotros/>
  );
}
}

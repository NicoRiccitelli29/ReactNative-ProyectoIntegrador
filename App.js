import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  ScrollView
  } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Screen_import } from './Screens/screen_import';


export default class App extends Component {
 
render(){
  return (
    <Screen_import/>
  );
}
}

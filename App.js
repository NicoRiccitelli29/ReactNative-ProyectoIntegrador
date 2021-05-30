import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  ScrollView
  } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Screen_importedCards } from './Screens/screen_importedCards';


export default class App extends Component {
 
render(){
  return (
    <Screen_importedCards/>
  );
}
}

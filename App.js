import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  ScrollView
  } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';


export default class App extends Component {
  constructor(){
    super();
    this.state={
        contador: 0,
        saludo: '',
        persona:{
          name:'',
          lastname:''
        }
    }
  }



 



render(){
  return (
    <View style={{flex:1, flexDirection: 'column',}}>
      <View style={{backgroundColor:"red", justifyContent:'center',flex:1, flexDirection:"column"}}> 
        <Text>Header</Text>
      </View>
      <View style={{flex:7}}>
      <ScrollView>
      <View style={{flex:1,
                    flexDirection:'row',
                    justifyContent:'space-around',
                    alignContent:'space-around',
                    alignItems:'center',
                    flexWrap:'wrap'
      }}>
        
          <View style={{backgroundColor:"pink", height:150, width:150, margin:15}}></View>
          <View style={{backgroundColor:"lightblue", height:150, width:150, margin:15}}></View>
          <View style={{backgroundColor:"yellow", height:150, width:150,margin:15}}></View>
          <View style={{backgroundColor:"green", height:150, width:150,margin:15}}></View>
          <View style={{backgroundColor:"yellow", height:150, width:150,margin:15}}></View>
          <View style={{backgroundColor:"blue", height:150, width:150,margin:15}}></View>
          <View style={{backgroundColor:"red", height:150, width:150,margin:15}}></View>
          <View style={{backgroundColor:"blue", height:150, width:150,margin:15}}></View>
          <View style={{backgroundColor:"green", height:150, width:150,margin:15}}></View>
          <View style={{backgroundColor:"red", height:150, width:150, margin:15}}></View>
          <View style={{backgroundColor:"blue", height:150, width:150,margin:15}}></View>
        
      </View>
      </ScrollView>
      </View>
    </View>
  );
}
}

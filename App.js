import React from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  ScrollView
  } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1, 
                  flexDirection: 'row',
        }}>
      <View style={{backgroundColor:"red", height:100}}> 
        <Text>Header</Text>
      </View>
      <View style={{flex:1,
                    flexDirection:'row',
                    justifyContent:'space-around',
                    alignContent:'space-around',
                    flexWrap:'wrap'
      }}>
        <ScrollView>
          <View style={{backgroundColor:"red", height:150, width:150}}></View>
          <View style={{backgroundColor:"green", height:150, width:150}}></View>
          <View style={{backgroundColor:"orange", height:150, width:150}}></View>
          <View style={{backgroundColor:"blue", height:150, width:150}}></View>
          <View style={{backgroundColor:"yellow", height:150, width:150}}></View>
          <View style={{backgroundColor:"red", height:150, width:150}}></View>
        </ScrollView>
      </View>

    </View>
  );
}


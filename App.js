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
      <View style={{backgroundColor:"red", height:100, width: auto}}> 
        <Text>Header</Text>
      </View>
      <View>
        <ScrollView>
          <Text>Tarjetas personas</Text>
        </ScrollView>
      </View>

    </View>
  );
}


import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  ScrollView
  } from 'react-native';

  class Screen_nosotros extends Component {
        constructor(){
            super();
            this.state={
            }
        }
    render(){
        return(
        <View>
            <View>
                <Text>
                    Nicolas  Eneo Riccitelli
                </Text>
            </View>
            <View>
                <Text>
                    Tomas Bongarra
                </Text>
            </View>
        </View>
        )
    }
}

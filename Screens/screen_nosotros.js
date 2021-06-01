import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  ScrollView
  } from 'react-native';
import styles from '../Styles/styles';

  class Screen_nosotros extends Component {
        constructor(){
            super();
            this.state={
            }
        }
    render(){
        return(
        <View style= {styles.nosotrosContenedor}>
            <View style={styles.nosotrosCard}>
                <Text>
                    Nicolas Eneo Riccitelli
                </Text>
            </View>
            <View style={styles.nosotrosCard}>
                <Text>
                    Tomas Bongarra
                </Text>
            </View>
            <View>
                <Text style={styles.nosotrosCard}>
                    Demian Lazarte
                </Text>
            </View>
        </View>
        )
    }
}


export{Screen_nosotros}
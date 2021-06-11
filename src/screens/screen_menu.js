import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  ScrollView,
  TouchableOpacity
  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/styles';

  class Screen_Menu extends Component {
        constructor(){
            super();
            this.state={
            }
        }
    render(){
        return(
            <SafeAreaView>
                <View>
                    <Text>Bienvenido a la Aplicacion</Text>
                    <Text> DNT React Native</Text>
                </View>
                <View style={styles.burguerContainer}> 
                    <TouchableOpacity onPress={()=> this.props.navigation.openDrawer()}> 
                        <View style={styles.burguerButton}>
                            <Image source='../../../assets/burguerButton'/>
                        </View>    
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
  }
  export {Screen_Menu}
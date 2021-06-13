import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
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
                <View style={styles.menuContainer}>
                    <Text style={styles.menuTitle}>Bienvenido a la Aplicacion</Text>
                    <Text style={styles.menuText}>  DNT React Native</Text>
                </View>
                <View style={styles.burguerContainer}> 
                    <TouchableOpacity onPress={()=> this.props.navigation.openDrawer()}> 
                        <View style={styles.burguerButton}>
                            <Image style={styles.imagenMenu} source={require('../Img/burguerButton.png')}/>
                        </View>    
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
  }
  export {Screen_Menu}
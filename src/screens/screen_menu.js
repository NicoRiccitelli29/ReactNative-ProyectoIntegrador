import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView
  } from 'react-native';
import styles from '../styles/styles';
import {DrawerNavigator} from '../components/DrawerNavigator'

  class Screen_Menu extends Component {
        constructor(){
            super();
            this.state={
            }
        }
    render(){
        return(
            <SafeAreaView>
                <ImageBackground style={styles.imageTotal} source={require('../Img/images.jpg')}>
                    <View style={styles.menuContainer}>
                        <Text style={styles.menuTitle}>Bienvenido a la Aplicacion</Text>
                        <Text style={styles.headerTextStyle}> DNT React Native</Text>
                        <Text style={styles.paginasHeader}>¡Estas en el menu!</Text>
                        <Text style={{justifyContent:'center', alignItems:'center'}}>Presiona el boton para navegar</Text>
                    </View>
                    
                    <DrawerNavigator navigator={this.props.navigation}/>
                </ImageBackground>
            </SafeAreaView>
        )
    }
  }
  export {Screen_Menu}
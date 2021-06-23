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
import {MaterialIcons} from '@expo/vector-icons'

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
                    <View style={{flex:1}}>
                    <View style={styles.header}> 
                            <DrawerNavigator navigator={this.props.navigation}/>
                            <Text style={styles.headerTextStyle}>DNT APP React Native</Text>
                            <View style={{marginRight: 45}}></View>
                    </View>

                    <View style={styles.mainContainer}>
                        <Text style={styles.menuTitle}>Bienvenido a la Aplicacion</Text>
                        <Text style={styles.headerTextStyle}> DNT React Native</Text>
                        <Text style={styles.paginasHeader}>¡Estas en el menu!</Text>
                        <Text>Presiona el boton para navegar</Text>
                    </View>
                    </View>
                    
                </ImageBackground>
            </SafeAreaView>
        )
    }
  }
  export {Screen_Menu}
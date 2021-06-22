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
                    <View style={styles.burguerContainer}> 
                        <TouchableOpacity onPress={()=> this.props.navigation.openDrawer()}> 
                            <View style={styles.burguerButton}>
                                <Image style={styles.imagenMenu} source={require('../Img/menu.png')}/>
                            </View>    
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
  }
  export {Screen_Menu}
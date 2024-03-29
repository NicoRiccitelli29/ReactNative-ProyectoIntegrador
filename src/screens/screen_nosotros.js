import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Button,
  Animated
  } from 'react-native';

import { DrawerNavigator } from '../components/DrawerNavigator'
import styles from '../styles/styles';

  class Screen_nosotros extends Component {
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
                    <Text style={styles.heading}>Acerca de nosotros</Text>

                    
                    <View style={styles.nosotrosCard}>
                        <Image style={styles.cardImageContainer} source={require('../Img/nico.jpg')}/>
                        <View style={styles.nosotrosContentContainer}>
                            <Text style={styles.cardTitleContainer}>Nicolas Eneo Riccitelli</Text>
                            <Text style={styles.textoTarjeta2}>Universidad de San Andrés</Text>
                            <Text style={styles.textoTarjeta2}>Estudios: 3 año Negocios Digitales</Text>
                            <Text style={styles.textoTarjeta2}>Edad: 20 años</Text>
                            <Text style={styles.textoTarjeta2}>Correo: nriccitelli@udesa.edu.ar</Text>
                        </View>
                        <View style={styles.cardButtonContainer}></View>
                    </View>
                    


                      <View style={styles.nosotrosCard}>
                        <Image style={styles.cardImageContainer} source={require('../Img/toto.jpeg')}/>
                        <View style={styles.nosotrosContentContainer}>
                            <Text style={styles.cardTitleContainer}>Tomas Bongarra</Text>
                            <Text style={styles.textoTarjeta2}>Universidad de San Andrés</Text>
                            <Text style={styles.textoTarjeta2}>Estudios: 3º Negocios Digitales</Text>
                            <Text style={styles.textoTarjeta2}>Edad: 20 años</Text>
                            <Text style={styles.textoTarjeta2}>Correo: tbongarra@udesa.edu.ar</Text>
                        </View>
                        <View style={styles.cardButtonContainer}></View>
                      </View>
                       

                      <View style={styles.nosotrosCard}>
                        <Image style={styles.cardImageContainer} source={require('../Img/demi.jpg')}/>
                        <View style={styles.nosotrosContentContainer}>
                            <Text style={styles.cardTitleContainer}>Demián Lazarte</Text>
                            <Text style={styles.textoTarjeta2}>Universidad de San Andrés</Text>
                            <Text style={styles.textoTarjeta2}>Estudios: 3º Negocios Digitales</Text>
                            <Text style={styles.textoTarjeta2}>Edad: 24 años</Text>
                            <Text style={styles.textoTarjeta2}>Correo: dlazarte@udesa.edu.ar</Text>
                        </View>
                        <View style={styles.cardButtonContainer}></View>
                      </View>
                        
                        



                      </View> 
                </View>
            </ImageBackground>
        </SafeAreaView> 
        )
    }
}


export{Screen_nosotros}
import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  ImageBackground
  } from 'react-native';
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
                <View style= {styles.nosotrosContenedor}>
                        <View>
                            <Text style={styles.paginasHeader}>¡Estas en la pagina Acerca de Nosotros!</Text>
                    
                        </View>
                            <View style={styles.nosotrosCard}>
                                <Image style={styles.nosotrosImage} source={require('../Img/nico.jpg')}/>
                                <Text style={styles.nosotrosText}>
                                    Nicolas Eneo Riccitelli
                                </Text>
                            <Text>Universidad de San Andrés</Text>
                            <Text>Estudios: 3 año Negocios Digitales</Text>
                            <Text>Edad: 20 años</Text>
                            <Text>Correo: nriccitelli@udesa.edu.ar</Text>
                
                        </View>
                        <View style={styles.nosotrosCard}>
                            <Image style={styles.nosotrosImage} source={require('../Img/toto.jpeg')}/>
                            <Text style={styles.nosotrosText}>
                            Tomas Bongarra
                            </Text>
                            <Text>Universidad de San Andrés</Text>
                            <Text>Estudios: 3 año Negocios Digitales</Text>
                            <Text>Edad: 20 años</Text>
                            <Text>Correo: tbongarra@udesa.edu.ar</Text>
                        </View>
                        <View style={styles.nosotrosCard}>
                            <Text  style={styles.nosotrosText}>
                                Demian Lazarte
                            </Text>
                        </View>
                </View>
            </ImageBackground>
        </SafeAreaView> 
        )
    }
}


export{Screen_nosotros}
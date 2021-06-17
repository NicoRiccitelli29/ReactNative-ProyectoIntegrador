import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  ScrollView,
  Image
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
        <View style= {styles.nosotrosContenedor}>
            <View>
                    <Text style={styles.nosotrosHeader}>¡Estas en la pagina Acerca de Nosotros!</Text>
                    
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
                <Text style={styles.nosotrosText}>
                    Tomas Bongarra
                </Text>
            </View>
            <View style={styles.nosotrosCard}>
                <Text  style={styles.nosotrosText}>
                    Demian Lazarte
                </Text>
            </View>
        </View>
        )
    }
}


export{Screen_nosotros}
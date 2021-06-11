import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  ScrollView
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
                    <Text>¡Estas en la pagina Sobre Nosotros!</Text>
                    <Text onPress={()=>this.props.navigation.goBack()}>Pagina Anterior</Text>
                    <Text onPress={()=>this.props.navigation.navigate('Screen 1')}>Ir a Usuarios importados</Text>
                    <Text onPress={()=>this.props.navigation.navigate('Screen 2')}>Ir a Usuarios guardados</Text>
                </View>
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
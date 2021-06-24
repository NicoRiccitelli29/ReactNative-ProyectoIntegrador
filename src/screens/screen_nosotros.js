import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity
  } from 'react-native';
import Animated from 'react-native-reanimated';
import { DrawerNavigator } from '../components/DrawerNavigator'
import styles from '../styles/styles';

  class Screen_nosotros extends Component {
        constructor(){
            super();
            this.state={
                
            }
        }

     //   position = new Animated.Value(0);
     //  rotation = new Animated.Value(0);

      //  rotacionTarjeta = ()=> {
        //        Animated.timing(this.rotation,{
          //          toValue:1,
            //        duration:1000,
              //      useNativeDriver:true
                //}).start();
        //}
    render(){

       // const rotA = this.rotation.interpolate({
         //   inputRange: [0,1],
           // outputRange: ["0deg", "180deg"]
        //})
        //const rotB = this.rotation.interpolate({
          //  inputRange:[0,1],
            //outputRange: ["180deg", "0deg"]
        //})
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
                    <Text style={styles.paginasHeader}>¡Acerca de Nosotros!</Text>
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
                            <Image style={styles.nosotrosImage} source={require('../Img/demi.jpg')}/>
                            <Text  style={styles.nosotrosText}>
                                Demian Lazarte
                            </Text>
                            <Text>Universidad de San Andrés</Text>
                            <Text>Estudios: 3 año Negocios Digitales</Text>
                            <Text>Edad: 24 años</Text>
                            <Text>Correo: dlazarte@udesa.edu.ar</Text>
                        </View>
                      </View> 
                </View>
            </ImageBackground>
        </SafeAreaView> 
        )
    }
}


export{Screen_nosotros}
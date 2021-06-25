import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {
	View,
	Text,
    Button,
    SafeAreaView,
    ImageBackground,
    Alert,
    TouchableOpacity
} from 'react-native';
import { Tarjeta2 } from '../components/Tarjetas2';
import { DrawerNavigator } from '../components/DrawerNavigator'
import { FontAwesome5 } from '@expo/vector-icons'; 
import styles from '../styles/styles';


class Screen_papelera extends Component {
    constructor(){
        super();
        this.state={
            usuariosEliminados: []
        }
    }

    

    borrarTarjeta(uuid){
        Alert.alert('Esta acción no se puede deshacer', 'Está seguro que quiere eliminar esta tarjeta?', [
            {text: 'OK', onPress:()=> {
                let usuarios = this.state.usuariosEliminados.filter((usuarios)=>{
                    return usuarios.login.uuid !== uuid
                        })
                      this.setState({usuariosEliminados: usuarios})
                } 
            }
        ])
        
    }

    async usuariosEliminados(){
        try{
            const eliminados = await AsyncStorage.getItem("usuariosEliminados");
            this.setState({usuariosEliminados: JSON.parse(eliminados)});
        } catch(error){
            console.log(error)
        }
    }   

	render () {
		return (
			<SafeAreaView>
                <ImageBackground style={styles.imageTotal} source={require('../Img/images.jpg')}>
                    <View style={{flex:1}}>
                        
                        <View style={styles.header}> 
                            <DrawerNavigator navigator={this.props.navigation}/>
                            <Text style={styles.headerTextStyle}>DNT APP React Native</Text>
                            <FontAwesome5 name="trash-alt" size={24} style={styles.trashContainer}/>
                        </View>

                        <View style={styles.mainContainer}>
                            <Text style={styles.heading}>Papelera</Text>
                            <Tarjeta2 info={this.state.usuariosEliminados} borrarTarjeta={this.borrarTarjeta.bind(this)}/>
                        </View>
                        
                        <View style={styles.footer}>  
                            <TouchableOpacity
                                style={styles.footerButton}
                                onPress={()=>this.usuariosEliminados()}
                            >
                            <Text style={styles.footerButtonText}>Mostrar eliminados</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
		)
	}
}

export {Screen_papelera}
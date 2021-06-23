import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {
	View,
	Text,
    Button,
    SafeAreaView,
    ImageBackground,
    Alert
} from 'react-native';
import { Tarjeta2 } from '../components/Tarjetas2';
import { DrawerNavigator } from '../components/DrawerNavigator'
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
			<SafeAreaView style={{flex:1}}>
                <ImageBackground style={styles.imageTotal} source={require('../Img/images.jpg')}>
                    <View>
                        <View style={styles.headerViewStyle}> 
                            <Text style={styles.headerTextStyle}>DNT APP React Native</Text>
                        </View>
                        <View>
                            <Text style={styles.paginasHeader}>¡Estas en la papelera!</Text>
                        </View>
                        <DrawerNavigator navigator={this.props.navigation}/>
                        <View>
                            <Tarjeta2 info={this.state.usuariosEliminados} borrarTarjeta={this.borrarTarjeta.bind(this)}/>
                            <Button title='Mostrar contactos eliminados' onPress={()=>this.usuariosEliminados()}/>
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
		)
	}
}

export {Screen_papelera}
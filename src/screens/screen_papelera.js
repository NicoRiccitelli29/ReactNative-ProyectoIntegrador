import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {
	View,
	Text,
    Button,
    SafeAreaView,
    ImageBackground
} from 'react-native';
import { Tarjeta2 } from '../components/Tarjetas2';
import styles from '../styles/styles';


class Screen_papelera extends Component {
    constructor(){
        super();
        this.state={
            usuariosEliminados: []
        }
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
                        <View>
                            <Tarjeta2 info={this.state.usuariosEliminados}/>
                            <Button title='Mostrar contactos eliminados' onPress={()=>this.usuariosEliminados()}/>
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
		)
	}
}

export {Screen_papelera}
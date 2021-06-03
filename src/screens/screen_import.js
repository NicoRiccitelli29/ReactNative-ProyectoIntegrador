import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import{
    View,
    Text,
    StyleSheet,
    TouchableOpacity,

}from 'react-native';
import { getUserData } from '../api/RandomUsers';
import { Tarjeta2 } from '../components/Tarjetas2';
import { Tarjeta } from '../components/Tarjetas';

class Screen_import extends Component {
    constructor(){
        super();
        this.state={
            usuarios:[]
        }
    }

    componentDidMount(){
        getUserData()
        .then((users)=>{
            console.log(users);
            this.setState({usuarios:users})
        })
    }

    async storeData(){
        try{
            const jsonUsuarios= JSON.stringify(this.state.usuarios);
            await AsyncStorage.setItem("Usuarios", jsonUsuarios);
            console.log("Datos guardados");
        
        }catch(error){console.log(error);}
    }

    render(){
        return(
            <View>
                <Text>
                <Tarjeta2 info={this.state.usuarios}/>
                </Text>
            </View>

        )
           
    }
           
}



export {Screen_import};


import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import{
    View,
    Text,
    ScrollView,
    TouchableOpacity,

}from 'react-native';
import { getUserData } from '../api/RandomUsers';
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
            await AsyncStorage.setItem("Usuarios", jsonUsuarios); //Primero pongo la clave y despues el valor de lo que estoy seteando
            console.log("Datos guardados");
        
        }catch(error){console.log(error);}
    }

    render(){
        return(
            <View>
             {this.state.usuarios.map((persona, idx)=>{
            return(
             <Tarjeta key={idx} info={persona}  />)
                    })
                }
                 </View>
            )
           
            }
           





}

export {Screen_import};

  {/*<Text>Tarjetas Para Importar</Text>
                {valores}
                <TouchableOpacity onPress={this.storeData.bind(this)}>
                    <View>
                        <Text style={{fontSize:20}}>Guardar Datos de Usuarios</Text>
                    </View>
                </TouchableOpacity>
            
            <Text key={item.login.uuid} style={{fontSize:20}}>{item.name.first} {item.name.last} </Text>)
            */}
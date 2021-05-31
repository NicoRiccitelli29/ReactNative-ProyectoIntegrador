import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import{
    View,
    Text,
    ScrollView,
    TouchableOpacity,

}from 'react-native';
import { Tarjeta } from '../components/Tarjetas';

class Screen_import extends Component {
    constructor(){
        super();
        this.state={
            usuarios:[]
        }
    }

    componentDidMount(){
        fetch('https://randomuser.me/api?results=10')
        .then(response => response.json())
        .then( result=>{
            this.setState({usuarios: result.results})
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
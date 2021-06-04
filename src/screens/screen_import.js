import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import{
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    Button,
}from 'react-native';

import { getUserData } from '../api/RandomUsers';
import { Tarjeta2 } from '../components/Tarjetas2';
import { Tarjeta } from '../components/Tarjetas';
import styles from '../styles/Styles';

class Screen_import extends Component {
    constructor(){
        super();
        this.state={
            usuarios:[],
            activity: false,
        }
    }

    componentDidMount(){
      
    }
    async getDataFromApi(){
            this.setState({activity: true});
            let usuarios = await getUserData();
            this.setState({users: usuarios, activity: false});
            
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
                <View style={styles.headerViewStyle}> 
                    <Text style={styles.headerTextStyle}>DNT APP React Native</Text>
                </View>
                <View>
                    {this.state.activity
                    
                    ?<>
                        <Text>Obteniendo usuarios...</Text>
                        <ActivityIndicator color="Blue" size='large'/>
                    </>
                    :   <Text>
                            <Tarjeta2 info={this.state.usuarios}/>
                        </Text>
                    
                    }
                    
                </View>
                <Button title='Obtener contactos.' onPress={()=>this.getDataFromApi()}/>
            </View>

        )
           
    }
           
}



export {Screen_import};


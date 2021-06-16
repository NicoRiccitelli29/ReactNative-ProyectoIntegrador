import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import { getUserData } from '../api/RandomUsers';
import { Tarjeta2 } from '../components/Tarjetas2';
import styles from '../styles/styles';
import { ModalInfo } from '../components/Modal';
import{
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    Button,
    SafeAreaView,
    TextInput,
}from 'react-native';




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
            this.setState({usuarios: usuarios, activity: false});
            
    }
    async storeData(){
        try{
            const jsonUsuarios= JSON.stringify(this.state.usuarios);
            await AsyncStorage.setItem("Usuarios", jsonUsuarios);
            console.log("Datos guardados correctamente");
        
        }catch(error){console.log(error);}
    }

    render(){
        return(
            <SafeAreaView>
                <View>
                    <View style={styles.headerViewStyle}> 
                        <Text style={styles.headerTextStyle}>DNT APP React Native</Text>
                    </View>

                    <View>
                        <Text>¡Estas en la pagina de obtencion de usuarios!</Text>
                       {/*} <TextInput style={styles.TextoInput} type="number" min="1" onChange={(event) => this.setState({UsuariosAImportar: event.target.value})}   placeholder="Ingrese un número"/>
                       <Text onPress={()=>this.props.navigation.navigate('Tarjetas importadas')}>Ir a tarjetas importadas</Text>
                        <Text onPress={()=>this.props.navigation.navigate('Nosotros')}>Acerca de nosotros ...</Text>{*/}
                    </View>
                    <View>
                        {this.state.activity
                        ?   <>
                                <Text>Obteniendo usuarios...</Text>
                                <ActivityIndicator color="Blue" size='large'/>
                            </>
                        :   <>
                                <Tarjeta2 info={this.state.usuarios}/>
                            </>
                        }
                     </View>
                    <Button title='Obtener contactos.' onPress={()=>this.getDataFromApi()}/>
                    <Button title='Guardar contactos' onPress={()=>this.storeData()}/>

                </View>
            </SafeAreaView>

        )
           
    }
           
}



export {Screen_import};


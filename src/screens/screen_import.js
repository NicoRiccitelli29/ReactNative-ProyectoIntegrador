import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import { getUserData } from '../api/RandomUsers';
import { Tarjeta2 } from '../components/Tarjetas2';
import { ModalInfo } from '../components/Modal';
import { DrawerNavigator } from '../components/DrawerNavigator'
import { MaterialIcons } from '@expo/vector-icons'
import{
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    ActivityIndicator,
    Button,
    SafeAreaView,
    TextInput,
    ImageBackground,
    Alert
}from 'react-native';

import styles from '../styles/styles';


class Screen_import extends Component {
    constructor(){
        super();
        this.state={
            usuarios:[],
            activity: false,
            UsuariosAImportar: 0, 
            tarjetasImportadas:[],
            modalGetData: false
        }
    }

    async getDataFromApi(){
            this.setState({activity: true});
            let usuarios = await getUserData(this.state.UsuariosAImportar);
            this.setState({usuarios: usuarios, activity: false});
            Alert.alert("Se importaron "+ this.state.UsuariosAImportar + " usuario/s.")          
    }

    borrarTarjeta(uuid){
        let usuarios = this.state.usuariosImportados.filter((usuarios)=>{
          return usuarios.login.uuid !== uuid
              })
            this.setState({usuariosImportados: usuarios})
    }

    
    async storeDataTodos(){
        try{
            const jsonUsuarios= JSON.stringify(this.state.usuarios);
            await AsyncStorage.setItem("Usuarios", jsonUsuarios);
            console.log("Datos guardados correctamente");
        } 
        catch(error){
            console.log(error)
        }
    }

    

    async storeData(item){
        let usuarios = this.state.usuarios
        usuarios.push(item)
        this.setState({tarjetasImportadas: tarjetasImportadas})
        try{ 
          const jsonTarjetasImportadas = JSON.stringify(this.state.tarjetasImportadas);
          await AsyncStorage.setItem("Usuarios", jsonTarjetasImportadas);
        }
        catch(e){
          console.log(e)
        }
    }


    render(){
        return(
            <SafeAreaView>
            <ImageBackground style={styles.imageTotal} source={require('../Img/images.jpg')}>

                <View style={{flex:1}}>

                    <DrawerNavigator navigator={this.props.navigation}/>

                    <View style={styles.headerViewStyle}> 
                        <Text style={styles.headerTextStyle}>DNT APP React Native</Text>
                    </View>

                    <View>
                        <Text style={styles.paginasHeader}>¡Estas en la pagina de obtencion de usuarios!</Text>

                        <Modal visible={this.state.modalGetData}>
                            <View>
                                <TextInput style={styles.TextoInput}  min="0" onChangeText={ text => this.setState({UsuariosAImportar: text})}   placeholder="Ingrese un número"/>
                                <Button 
                                    title='Obtener contactos.' 
                                    onPress={
                                        ()=>{this.getDataFromApi(); this.setState({modalGetData:false})}
                                    }
                                /> 
                            </View>
                        </Modal>

                        <MaterialIcons 
                            name='add'
                            size={24}
                            onPress={()=>this.setState({modalGetData: true})}
                        />

                        

                        
                    </View>

                    <View>

                        {this.state.activity
                        ?   <>
                                <Text>Obteniendo usuarios...</Text>
                                <ActivityIndicator color="Blue" size='large'/>
                            </>
                        :   <>
                                <Tarjeta2 info={this.state.usuarios} borrarTarjeta={this.borrarTarjeta.bind(this)} guardar={this.storeData.bind(this)}/>
                            </>
                        }
                   
                    
                    <Button title='Guardar contactos' onPress={()=>this.storeDataTodos()}/>
                     {/*} Alcanza con poner el boton de guardar dentro del componente tarjetas?{*/}
                    </View>
            
                </View>
            </ImageBackground>
            </SafeAreaView>

        )
           
    }
           
}



export {Screen_import};


import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import { getUserData } from '../api/RandomUsers';
import { Tarjeta2 } from '../components/Tarjetas2';
import { ModalInfo } from '../components/Modal';
import { DrawerNavigator } from '../components/DrawerNavigator';
import { MaterialIcons } from '@expo/vector-icons';
import { TarjetasImport } from '../components/TarjetasImport';
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
        let usuarios = this.state.usuarios.filter((usuarios)=>{
          return usuarios.login.uuid !== uuid
              })
            this.setState({usuarios: usuarios})
    }

    
    async storeDataTodos(){
        try{
            const jsonUsuarios= JSON.stringify(this.state.usuarios);
            await AsyncStorage.setItem("Usuarios", jsonUsuarios);
            console.log("Datos guardados correctamente");
            Alert.alert("Se guardaron los datos correctamente")
        } 
        catch(error){
            console.log(error)
        }
    } 

    

  /*async storeData(item){
        let usuarios = this.state.usuarios
        usuarios.push(item)
        this.setState({usuarios: usuarios})
        try{ 
          const Usuario = JSON.stringify(usuarios);
          await AsyncStorage.setItem("Usuarios", Usuario);
        }
        catch(e){
          console.log(e)
        }
    } */


    render(){
        return(
            <SafeAreaView>
            <ImageBackground style={styles.imageTotal} source={require('../Img/images.jpg')}>

                <View style={{flex:1}}>

                    <View style={styles.header}> 
                        <DrawerNavigator navigator={this.props.navigation}/>
                        <Text style={styles.headerTextStyle}>DNT APP React Native</Text>
                        <Modal 
                            visible={this.state.modalGetData}
                            transparent={true}
                            animationType='slide'
                        >
                            <View style={styles.modalContainer}>
                            <View style={styles.modalGetData}>
                                <TextInput style={styles.TextoInput}  
                                    min="0" 
                                    onChangeText={ text => this.setState({UsuariosAImportar: text})}   
                                    placeholder="Ingrese un número"/>
                                <TouchableOpacity
                                    style={styles.modalButton}
                                    onPress={
                                        ()=>{this.getDataFromApi(); this.setState({modalGetData:false})}
                                    }
                                >
                                    <Text style={styles.modalButtonText}>Importar</Text>
                                </TouchableOpacity>
                                
                            </View>
                            </View>   
                        </Modal>

                        <MaterialIcons 
                            name='add'
                            size={30}
                            color="white"
                            onPress={()=>this.setState({modalGetData: true})}
                            style={styles.addContainer}
                        />
                    </View>

                    <View style={styles.mainContainer}>
                        <Text style={styles.heading}>Importar contactos</Text>
                       
                        

                        {this.state.activity
                        ?   <>
                                <Text>Obteniendo usuarios...</Text>
                                <ActivityIndicator color="Blue" size='large'/>
                            </>
                        :   <>
                                <TarjetasImport info={this.state.usuarios} borrarTarjeta={this.borrarTarjeta.bind(this)}/>
                            </>
                        }
                        
                    </View>

                    <View style={styles.footer}>
                        <TouchableOpacity
                            style={styles.footerButton}
                            onPress={()=>this.storeDataTodos()}>
                            <Text style={styles.footerButtonText}>Guardar contactos</Text>
                        </TouchableOpacity>
                    
                    </View>
            
                </View>
            </ImageBackground>
            </SafeAreaView>

        )
           
    }
           
}



export {Screen_import};


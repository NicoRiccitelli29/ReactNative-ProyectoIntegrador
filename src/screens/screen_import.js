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
    ImageBackground,
    Alert
}from 'react-native';


class Screen_import extends Component {
    constructor(){
        super();
        this.state={
            usuarios:[],
            activity: false,
            UsuariosAImportar: 0, 
            tarjetasImportadas:[],
            

        }
    }

    componentDidMount(){
      
    }

    async getDataFromApi(){
            this.setState({activity: true});
            let usuarios = await getUserData(this.state.UsuariosAImportar);
            this.setState({usuarios: usuarios, activity: false});
            Alert.alert("Se importaron "+ this.state.UsuariosAImportar + " usuario/s.")
           
            
    }

    /*} borrarTarjeta(item){
        let usuarios = this.state.usuariosImportados.filter((usuarios)=>{
          return usuarios !== item
              })
            this.setState({usuariosImportados: usuarios})}{*/

    
    async storeDataTodos(){
        try{
            const jsonUsuarios= JSON.stringify(this.state.usuarios);
            await AsyncStorage.setItem("Usuarios", jsonUsuarios);
            console.log("Datos guardados correctamente");
        
        }catch(error){console.log(error);}}
    

    /*}async storeData(item){
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
    
    }{*/






    render(){
        return(
            <SafeAreaView>
                <ImageBackground style={styles.imageTotal} source={require('../Img/images.jpg')}>

                <View style={{flex:1}}>
                    <View style={styles.headerViewStyle}> 
                        <Text style={styles.headerTextStyle}>DNT APP React Native</Text>
                    </View>

                    <View>
                        <Text style={styles.paginasHeader}>¡Estas en la pagina de obtencion de usuarios!</Text>
                       <TextInput style={styles.TextoInput}  min="0" onChangeText={ text => this.setState({UsuariosAImportar: text})}   placeholder="Ingrese un número"/>
                       <Button title='Obtener contactos.' onPress={()=>this.getDataFromApi()}/> 
                       {/*<Text onPress={()=>this.props.navigation.navigate('Tarjetas importadas')}>Ir a tarjetas importadas</Text>
                        <Text onPress={()=>this.props.navigation.navigate('Nosotros')}>Acerca de nosotros ...</Text>{*/}
                    </View>
                    <View>
                        {this.state.activity
                        ?   <>
                                <Text>Obteniendo usuarios...</Text>
                                <ActivityIndicator color="Blue" size='large'/>
                            </>
                        :   <>
                                <Tarjeta2 info={this.state.usuarios} /*}borrar={this.borrarTarjeta.bind(this)} guardar={this.storeData.bind(this)}{*//>
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


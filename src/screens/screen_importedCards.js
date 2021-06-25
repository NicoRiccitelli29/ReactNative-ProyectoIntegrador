import React, {Component} from 'react';
import { 
    StyleSheet, 
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Button,
    SafeAreaView,
    TextInput,
    ImageBackground
    } from 'react-native';
import { Tarjeta2 } from '../components/Tarjetas2';
import {DrawerNavigator} from '../components/DrawerNavigator'
import { SimpleLineIcons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles';
  
  
class Screen_importedCards extends Component {
    constructor(){
      super();
      this.state={
          contador: 0,
          usuariosImportados: [],
          UsuariosATraer:'', 

         
          }
      }
    
 
  
  async getData(){
    try {
        const resultado= await AsyncStorage.getItem("Usuarios");
        this.setState({usuariosImportados: JSON.parse(resultado)});
    }
    catch(error){console.log(error)};
  }
   
  async RemoveData(){
    try {
        const jsonUsuariosAEliminar= JSON.stringify(this.state.usuariosImportados);
        await AsyncStorage.setItem("usuariosEliminados", jsonUsuariosAEliminar);
        console.log("Usuario eliminado correctamente");
        this.setState({usuariosImportados: ""})
        
        }
    catch(error){
      console.log(error)
    }
  }

  
  borrarTarjeta(uuid){
        let usuarios = this.state.usuariosImportados.filter((usuarios)=>{
          return usuarios.login.uuid !== uuid
              })
            this.setState({usuariosImportados: usuarios});
            
  
  }





  busquedaTarjetas(text){
    let buscarTarjetas = text.toUpperCase()
   console.log(buscarTarjetas)
    let buscar = this.state.usuariosImportados.filter((busqueda)=>{
        let nombre = busqueda.name.first.toUpperCase()
        let apellido = busqueda.name.last.toUpperCase()
        let ciudad = busqueda.location.city.toUpperCase()
        let pais = busqueda.location.country.toUpperCase()
       return nombre.startsWith(buscarTarjetas) || apellido.startsWith(buscarTarjetas) || ciudad.startsWith(buscarTarjetas) || pais.startsWith(buscarTarjetas)
       
    })
    this.setState({
        usuariosImportados : buscar
    }
    
    )
   
  
}
  
  
    render(){
      
      return (
          <SafeAreaView>
            <ImageBackground style={styles.imageTotal} source={require('../Img/images.jpg')}>
              <View style={{flex:1}}>
                  <View style={styles.header}> 
                    <DrawerNavigator navigator={this.props.navigation}/>
                    <Text style={styles.headerTextStyle}>DNT APP React Native</Text>
                    <SimpleLineIcons name="options" size={20} style={styles.optionContainer}/>
              </View>
                
              <View style={styles.mainContainer}>
                <Text style={styles.heading}>Mis contactos</Text>
                <View>
                  <TextInput style={styles.searchBar} onChangeText={ text => this.busquedaTarjetas(text)} placeholder="Busca por un filtro" keyboardType="default" />
                </View>           
                <Tarjeta2 info={this.state.usuariosImportados} borrarTarjeta={this.borrarTarjeta.bind(this)} />
              </View>

              <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton} onPress={()=>this.RemoveData()}>
                  <Text style={styles.footerButtonText}>Borrar contactos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButton} onPress={()=>this.getData()}>
                  <Text style={styles.footerButtonText}>Cargar contactos</Text>
                </TouchableOpacity>

              </View>
                  
                
                 

              </View>
            </ImageBackground>  
          </SafeAreaView>
      );
  }
  }

export {Screen_importedCards};
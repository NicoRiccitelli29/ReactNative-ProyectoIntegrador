import React, {Component} from 'react';
import { 
    StyleSheet, 
    Text,
    View,
    ScrollView,
    TouchableOpacity
    } from 'react-native';
  
  import AsyncStorage from '@react-native-async-storage/async-storage';
  
  
  export default class Screen_importedCards extends Component {
    constructor(){
      super();
      this.state={
          contador: 0,
          usuariosImportados: [],

         
          }
      }
    
  
  
  async getData(){
    try {
        const resultado= await AsyncStorage.getItem("Usuarios");
        this.setState({usuariosImportados: JSON.parse(resultado)});
    }
    catch(error){console.log(error)};
  }
   
  
  
  
    render(){
        const valores = this.state.usuariosImportados.map(item => 
            <Text key={item.login.uuid}>{item.name.first}{item.name.last}</Text>)
    return (
      <View style={{flex:1, flexDirection: 'column',}}>
        <View style={{backgroundColor:"red", justifyContent:'center',flex:1, flexDirection:"column"}}> 
          <Text>Header</Text>
        </View>
        <View>
            <Text>Mostramos los datos</Text>
            {values}
            <TouchableOpacity onPress={this.getData.bind(this)}>
            <View><Text>Mostrar Datos</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.setState(usuariosImportados=[ ])}>
            <View><Text>Borrar Datos</Text></View>
            </TouchableOpacity>
        </View>

        <View style={{flex:7}}>
        <ScrollView>
        <View style={{flex:1,
                      flexDirection:'row',
                      justifyContent:'space-around',
                      alignContent:'space-around',
                      alignItems:'center',
                      flexWrap:'wrap'
        }}>
          
            <View style={{backgroundColor:"pink", height:150, width:150, margin:15}}></View>
            <View style={{backgroundColor:"lightblue", height:150, width:150, margin:15}}></View>
            <View style={{backgroundColor:"yellow", height:150, width:150,margin:15}}></View>
            <View style={{backgroundColor:"green", height:150, width:150,margin:15}}></View>
            <View style={{backgroundColor:"yellow", height:150, width:150,margin:15}}></View>
            <View style={{backgroundColor:"blue", height:150, width:150,margin:15}}></View>
            <View style={{backgroundColor:"red", height:150, width:150,margin:15}}></View>
            <View style={{backgroundColor:"blue", height:150, width:150,margin:15}}></View>
            <View style={{backgroundColor:"green", height:150, width:150,margin:15}}></View>
            <View style={{backgroundColor:"red", height:150, width:150, margin:15}}></View>
            <View style={{backgroundColor:"blue", height:150, width:150,margin:15}}></View>
          
        </View>
        </ScrollView>
        </View>
      </View>
    );
  }
  }
  
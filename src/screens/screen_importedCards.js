import React, {Component} from 'react';
import { 
    StyleSheet, 
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Button,
    SafeAreaView
    } from 'react-native';
import { Tarjeta2 } from '../components/Tarjetas2';  
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles';
  
  
class Screen_importedCards extends Component {
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
      
      return (
          <SafeAreaView style={{flex:1}}>
            <View>
                  <View style={styles.headerViewStyle}> 
                    <Text style={styles.headerTextStyle}>DNT APP React Native</Text>
                  </View>
                  <View>
                          <Text>¡Estas en la pagina de Tarjetas importadas!</Text>
                         {/*} <Text onPress={()=>this.props.navigation.goBack()}>Pagina Anterior</Text>
                          <Text onPress={()=>this.props.navigation.navigate('Importar tarjetas')}>Ir a importar tarjetas</Text>
      <Text onPress={()=>this.props.navigation.navigate('Screen 3')}>Acerca de nosotros...</Text>{*/}
                  </View>
                  <View>
                  <Tarjeta2 info={this.state.usuariosImportados}/>
                  </View>
                  <View>
                  <Button title='Mostrar contactos importados' onPress={()=>this.getData()}/>
                  </View>

                    

              {/* <View style={{flex:1}}>
                    
                    {valores}
                    <TouchableOpacity onPress={this.getData.bind(this)}>
                    <View><Text>Mostrar Datos</Text></View>
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
                
                              
                
                    </View>
                  </ScrollView>
                  </View> */}
              </View>
              
          </SafeAreaView>
      );
  }
  }

export {Screen_importedCards};
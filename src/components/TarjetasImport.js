import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Animated
  } from 'react-native';

import styles from '../styles/styles';
import { ModalInfo } from './Modal';


class TarjetasImport extends Component{
    constructor(){
        super();
        this.state = {
            showModal: false,
            selectedItem: null,
            toValue:1.2,
           
        }
    }

    
    keyExtractor = (item,idx) => idx.toString();

    async guardarTarjetas(){
        try{
            let guardar = await AsyncStorage.getItem('Usuarios');
            guardar= JSON.parse(guardar);
            if(guardar===null) guardar=[];
            
            guardar.push(this.props.info);
            const usuarioGuardar = JSON.stringify(guardar);
            await AsyncStorage.setItem('Usuarios', usuarioGuardar)
        } catch (error){
            console.log(error)
        }
    }

    

    showModal(item){
        this.setState({selectedItem:item , showModal:true})
    }


    onClose(){
      this.setState({showModal: !this.state.showModal})
      Animated.timing(this.position,{
        toValue:1,
        tension: 100,
        friction: 1,
        useNativeDriver:true
    }).start();
    }

    position = new Animated.Value(1);

    animarTarjeta = (item) =>{
        Animated.timing(this.position,{
            toValue:this.state.toValue,
            tension: 100,
            friction: 1,
            useNativeDriver:true
        }).start();
        this.showModal(item);
    }
    renderItem = ({item}) => {
        return (
            
            <TouchableOpacity onPress={()=>this.animarTarjeta(item)} >
                <Animated.View style={[styles.cardTarjeta2, {transform:[{scale: this.position}]}]}> 

                
                <TouchableOpacity  onPress = { ()=> this.guardarTarjetas.bind(this)}>
                    <View>
                        <Text style = { styles.buttonGuardar }>Guardar</Text>
                    </View>
                </TouchableOpacity>

                    
                    
                <Image style={styles.imageTarjeta2} source= {{uri: item.picture.thumbnail}}></Image>
                
                <Text style={styles.textoTarjeta2}>Nombre y Apellido: {item.name.last}, {item.name.first}</Text>
                
                <Text style={styles.textoTarjeta2}>Email: {item.email}</Text>
                
                <Text style={styles.textoTarjeta2}>Fecha de nacimiento:{item.dob.date} ({item.dob.age})</Text>

                <Text style={styles.textoTarjeta2}>Edad: {item.dob.age}</Text>
               
               
                </Animated.View>
            </TouchableOpacity>
             
         
            
        )
    }
    separator = () => <View style={styles.separator}></View>

    render(){
        return(
            <View style={{backgroundColor:"red", height:'85%'}}>
                <View style={styles.headerTarjeta2}>
                    <View style= {styles.listContainerTarjeta2}>
                        <FlatList
                        data={this.props.info}
                        keyExtractor={this.keyExtractor}
                        renderItem={this.renderItem}
                        ItemSeparatorComponent={this.separator}
                        showsVerticalScrollIndicator ={false}
                        />
                        <Text>Presione la tarjeta para ver detalle</Text>
                    </View>
                </View>
                <ModalInfo showModal={this.state.showModal} 
                    onClose={ this.onClose.bind(this)}
                     value={this.state.selectedItem}
                 />
            </View>
            
        );

    }

}





export {TarjetasImport}
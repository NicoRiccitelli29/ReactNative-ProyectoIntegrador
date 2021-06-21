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


class Tarjeta2 extends Component{
    constructor(){
        super();
        this.state = {
            showModal: false,
            selectedItem: null,
            toValue:1.2
        }
    }

    
    keyExtractor = (item,idx) => idx.toString();
    
    /*} borrarItem(){
        this.props.borrar(this.props.info.login.uuid)
    }

    guardarTarjeta(){
        this.props.guardar(this.props.info.login.uuid)
    }{*/

    showModal(item){
        this.setState({selectedItem:item , showModal:true})
    }


    onClose(){
      this.setState({showModal: !this.state.showModal})
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
          {/*}  <TouchableOpacity style={ styles.borrar } onPress = { this.borrarItem.bind(this,this.props.info.login.uuid) }>
            <View >
                <Text style = { styles.buttonText }>X</Text>
            </View>
        </TouchableOpacity> 
           <TouchableOpacity style={ styles.borrar } onPress = { this.guardarTarjeta.bind(this,this.props.info.login.uuid) }>
            <View >
                <Text style = { styles.buttonText }>Guardar</Text>
            </View>
        </TouchableOpacity>{*/}
            
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





export {Tarjeta2}
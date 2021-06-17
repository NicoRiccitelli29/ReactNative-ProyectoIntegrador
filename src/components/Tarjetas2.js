import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  FlatList,
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
    
   
    showModal(item){
        this.setState({selectedItem:item , showModal:true})
    }


    onClose(){
      this.setState({showModal: !this.state.showModal})
    }

    position = new Animated.Value(1);

    animarTarjeta = () =>{
        Animated.spring(this.position,{
            toValue:this.state.toValue,
            tension: 1000,
            friction: 1,
            useNativeDriver:false
        }).start();
    }
    renderItem = ({item}) => {
        return (
            <Animated.View>
            <TouchableOpacity onLongPress={()=> this.showModal(item)} onPress={()=>this.animarTarjeta} >
            <View style={styles.cardTarjeta2}> 
           
           
               {/*<Image style={styles.imageTarjeta2} source= {require({'item.picture.thumbnail'})}/>*/}
               
                <Text style={styles.textoTarjeta2}>Nombre y Apellido: {item.name.last}, {item.name.first}</Text>
                
                <Text style={styles.textoTarjeta2}>Email: {item.email}</Text>
                
                <Text style={styles.textoTarjeta2}>Fecha de nacimiento:{item.dob.date} ({item.dob.age})</Text>

                <Text style={styles.textoTarjeta2}>Edad: {item.dob.age}</Text>
               
               
            </View>
            
            </TouchableOpacity>
            </Animated.View>
         
            
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
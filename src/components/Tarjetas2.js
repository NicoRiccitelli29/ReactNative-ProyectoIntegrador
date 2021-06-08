import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  FlatList,
  TouchableOpacity
  } from 'react-native';
import styles from '../styles/styles';
import { ModalInfo } from './Modal';


class Tarjeta2 extends Component{
    constructor(){
        super();
        this.state = {
            showModal: false,
            selectedItem: null,
        }
    }

    
    keyExtractor = (item,idx) => idx.toString();
    
   
    showModal(item){
        this.setState({selectedItem:item , showModal:true})
    }


    //onClose(){
      //  this.setState({showModal: !this.state.showModal})
    //}

    renderItem = ({item}) => {
        return (
          
            <TouchableOpacity onPress={()=> this.showModal(item)}>
            <View style={styles.cardTarjeta2}> 
                <Image style={styles.imageTarjeta2} source={{uri:item.picture.thumbnail}}/>
                <Text style={styles.textoTarjeta2}>{item.name.last}, {item.name.first}</Text>
            </View>
            
            </TouchableOpacity>
             
         
            
        )
    }
    separator = () => <View style={styles.separator}></View>

    render(){
        return(
            <View>
                <View style={styles.headerTarjeta2}>
                    <View style= {styles.listContainerTarjeta2}>
                        <FlatList
                        data={this.props.info}
                        keyExtractor={this.keyExtractor}
                        renderItem={this.renderItem}
                        ItemSeparatorComponent={this.separator}
                        />
                    </View>
                </View>
                <ModalInfo showModal={this.state.showModal} 
             // onClose={ this.onClose.bind(this)}
              value={this.state.selectedItem}
              />
            </View>
            
        );

    }

}





export {Tarjeta2}
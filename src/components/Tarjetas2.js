import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  FlatList
  } from 'react-native';
import styles from '../styles/Styles';


class Tarjeta2 extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    
    keyExtractor = (item,idx) => idx.toString();
    renderItem = ({item}) => {
        return (
            <View style={styles.cardTarjeta2}> 
                <Text style={styles.textoTarjeta2}>{item.name.last}, {item.name.first}</Text>
            </View>
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
            </View>
        );

    }

}





export {Tarjeta2}
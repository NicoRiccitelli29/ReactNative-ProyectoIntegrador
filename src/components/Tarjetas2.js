import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  FlatList
  } from 'react-native';
/*import styles from '../styles/styles';*/

class Tarjeta2 extends Component{

    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    data = () => {this.info}
    keyExtractor = (item,idx) => item.toString();
    renderItem = ({item}) => {
        return (
            <View style={styles.card}>
                <Text style={styles.texto}>{item.name.last}, {item.name.first}</Text>
            </View>
        )
    }
    separator = () => <View style={styles.separator}></View>

    render(){
        return(
            <View style={styles.container}>
            <View style={styles.header}>
                <View style= {styles.listContainer}>
                    <FlatList
                    data={this.data}
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

const styles = StyleSheet.create (
    {
        header: {
            flex:1,
            backgroundColor: 'blue'
        },
        container: {
            flex:1,
            backgroundColor: 'green'
        },
        listContainer: {
            flex: 11,
            justifyContent: 'center',
            alignItems: 'center'
        },
        texto: {
            fontSize: 20
        },
        card: {
            flexDirection: 'row',
            margin: 5,
            width: 250,
            height: 100,
            padding: 10
        },
        image: {
            width: 100,
            height: 100
        }
    }
)




export {Tarjeta2}
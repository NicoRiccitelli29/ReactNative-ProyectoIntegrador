import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  FlatList
  } from 'react-native';


class Tarjeta2 extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    
    keyExtractor = (item,idx) => idx.toString();
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
            <View>
            <View style={styles.header}>
                <View style= {styles.listContainer}>
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

const styles = StyleSheet.create (
    {
        header: {
            flex:1,
            backgroundColor: 'white'
        },
  
        listContainer: {
            flex: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            
        },
        texto: {
            fontSize: 20
        },
        card: {
            backgroundColor: 'grey',
            borderRadius: 15,
            flexDirection: 'row',
            margin: 5,
            width: 300,
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
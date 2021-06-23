import React, {Component} from 'react'
import { View, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';



export class DrawerNavigator extends Component {
    render() {
        return(
            <View style={styles.burguerContainer}> 
                        <TouchableOpacity onPress={()=>this.props.navigator.openDrawer()}> 
                            <View style={styles.burguerButton}>
                                <Image style={styles.imagenMenu} source={require('../Img/menu.png')}/>
                            </View>    
                        </TouchableOpacity>
                    </View>
        )
    }
}
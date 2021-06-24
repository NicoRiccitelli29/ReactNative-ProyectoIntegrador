import React, {Component} from 'react'
import { View, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import styles from '../styles/styles';



export class DrawerNavigator extends Component {
    render() {
        return(
            <View style={styles.menuContainer}> 
                <Entypo //Es un componente de expo que trae iconos
                    name="menu"
                    size={30}
                    color="black"
                    onPress={()=>this.props.navigator.openDrawer()}
                    /> 
            </View>
        )
    }
}
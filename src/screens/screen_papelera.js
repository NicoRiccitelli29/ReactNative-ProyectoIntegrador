import React, {Component} from 'react';
import {
	View,
	Text,
    SafeAreaView
} from 'react-native';
import styles from '../styles/styles';


class Screen_papelera extends Component {
	render () {
		return (
			<SafeAreaView style={{flex:1}}>
                <View>
                    <View style={styles.headerViewStyle}> 
                        <Text style={styles.headerTextStyle}>DNT APP React Native</Text>
                    </View>
                    <View>
                        <Text>¡Estas en la papelera!</Text>
                        <Text onPress={()=>this.props.navigation.goBack()}>Pagina Anterior</Text>
                        <Text onPress={()=>this.props.navigation.navigate('Tarjetas importadas')}>Ir a tarjetas importadas</Text>
                        <Text onPress={()=>this.props.navigation.navigate('Nosotros')}>Acerca de nosotros...</Text>
                    </View>
                </View>

            </SafeAreaView>
		)
	}
}

export {Screen_papelera}
import React, {Component} from 'react';
import {
	View,
	Text,
    SafeAreaView,
    ImageBackground
} from 'react-native';
import styles from '../styles/styles';


class Screen_papelera extends Component {
	render () {
		return (
			<SafeAreaView style={{flex:1}}>
                <ImageBackground style={styles.imageTotal} source={require('../Img/images.jpg')}>
                    <View>
                        <View style={styles.headerViewStyle}> 
                            <Text style={styles.headerTextStyle}>DNT APP React Native</Text>
                        </View>
                        <View>
                            <Text style={styles.paginasHeader}>¡Estas en la papelera!</Text>
                        
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
		)
	}
}

export {Screen_papelera}
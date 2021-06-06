import React, {Component} from 'react';
import { getUserData } from '../api/RandomUsers';
import { Tarjeta2 } from '../components/Tarjetas2';
import { 
  StyleSheet, 
  Text,
  View,
  Modal, 
  } from 'react-native';
import styles from '../styles/styles';

  export class ModalInfo extends Component{
      render(){
          return(
            
      <Modal visible={this.props.showModal}
                     transparent={true}   
                    animationType='slide'>
         <View style={styles.modalContainer}>         
          <View style={styles.modal}>
                {this.props.value &&
                <Text style={styles.modalText}>{this.props.value.name.first}</Text>
                }
                {/*<Text onPress={this.props.onClose()}>Close [X]</Text>*/}
          </View>
          </View>    
      </Modal>

          )}} 
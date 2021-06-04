import React, {Component} from 'react';
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
      <Modal visible={this.props.showModal} animationType='slide'>
          <View>
                <Text>Hola</Text>
                {this.props.value &&
                <Text>{this.props.value.name.first}</Text>
                }
          </View>
      </Modal>

          )}} 
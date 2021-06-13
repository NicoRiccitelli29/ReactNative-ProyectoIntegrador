import React, {Component} from 'react';
import { getUserData } from '../api/RandomUsers';
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
                <>
                <Text style={styles.modalText}>Calle y numero: {this.props.value.location.street.name}, {this.props.value.location.street.number}</Text>
                <Text style={styles.modalText}>Ciudad / estado: {this.props.value.location.city} / {this.props.value.location.state}</Text>
                <Text style ={styles.modalText}>Pais: {this.props.value.location.country}</Text>
                <Text style ={styles.modalText}>Codigo Postal: {this.props.value.location.postcode}</Text>
                <Text style ={styles.modalText}>Fecha de Registro: {this.props.value.registered.date}</Text>
                <Text style={styles.modalText}>Telefono: {this.props.value.phone}</Text>
                </>
                }
                <Text onPress={this.props.onClose} style={styles.modalButtonClose}>Close [X]</Text>
          </View>
          </View>    
      </Modal>

          )}} 
import React, {Component} from 'react';
import { getUserData } from '../api/RandomUsers';
import { 
  StyleSheet, 
  Text,
  View,
  Modal, 
  TextInput,
  TouchableOpacity
  } from 'react-native';
import styles from '../styles/styles';

  export class ModalInfo extends Component{
    constructor(){
      super()
      this.state ={
          text: "",
          textHandler: "",
      }
    }
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
                <Text style={styles.modalText}>Comentario: {this.state.text}</Text>
                <View>
                <TextInput onChangeText={texto => this.setState({textHandler:texto})}/>
                <TouchableOpacity onPress={() => this.setState({ text: this.state.textHandler})}>
                    <View>
                        <Text style={styles.modalText}>AGREGAR</Text>
                    </View>
                </TouchableOpacity>
                </View>
                </>
                }
                <Text onPress={this.props.onClose} style={styles.modalButtonClose}>Close [X]</Text>
          </View>
          </View>    
      </Modal>

          )}} 
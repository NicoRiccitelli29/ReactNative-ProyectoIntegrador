import React, {Component} from 'react';
import { getUserData } from '../api/RandomUsers';
import { 
  StyleSheet, 
  Text,
  View,
  Modal, 
  TextInput,
  TouchableOpacity,
  Image
  } from 'react-native';
import styles from '../styles/styles';
import { AntDesign } from '@expo/vector-icons';

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
                <View style={styles.modalHeadingContainer}>
                <Image style={styles.modalImageContainer} source= {{uri: this.props.value.picture.large}}></Image>
                <Text style={styles.modalTitleContainer}>{this.props.value.name.last}, {this.props.value.name.first}</Text>
                </View>
                <View style={styles.modalContentContainer}>
                <Text style={styles.modalText}>Email: {this.props.value.email}</Text>
                
                <Text style={styles.modalText}>Fecha de nacimiento:{this.props.value.dob.date.substring(0,10)}</Text>

                

                
                <Text style={styles.modalText}>Calle y numero: {this.props.value.location.street.name}, {this.props.value.location.street.number}</Text>
                <Text style={styles.modalText}>Ciudad / estado: {this.props.value.location.city} / {this.props.value.location.state}</Text>
                <Text style ={styles.modalText}>Pais: {this.props.value.location.country}</Text>
                <Text style ={styles.modalText}>Codigo Postal: {this.props.value.location.postcode}</Text>
                <Text style ={styles.modalText}>Fecha de Registro: {this.props.value.registered.date.substring(10,0)}</Text>
                <Text style={styles.modalText}>Telefono: {this.props.value.phone}</Text>
                <Text style={styles.modalText,styles.Comentario}>Comentario: {this.state.text}</Text>
                </View>
                
                <View style={styles.modalFooter}>
                <TextInput 
                style={styles.modalInput}
                onChangeText={texto => this.setState({textHandler:texto})}/>

                <TouchableOpacity
                style={styles.modalFooterButton} 
                onPress={() => this.setState({ text: this.state.textHandler})}>
                    <View>
                        <Text style={styles.footerButtonText}>Comentar</Text>
                    </View>
                </TouchableOpacity>
                </View>
                </>
                }
                <AntDesign 
                  name="close" 
                  size={24} 
                  color="black" 
                  onPress={this.props.onClose} 
                  style={styles.modalButtonClose}/>
                
          </View>
          </View>    
      </Modal>

          )}} 
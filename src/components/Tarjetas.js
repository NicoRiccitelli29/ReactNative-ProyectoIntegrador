import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  ScrollView,
  SafeAreaView
  } from 'react-native';

  class  Tarjeta extends Component{
    constructor(){
        super();
        this.state={

        }
    }

      render(){
        return(
          <SafeAreaView style={{flex:1}} >
          <View style={{flex:7}}>
          <ScrollView>
          <View style={{flex:1,
                        flexDirection:'row',
                        justifyContent:'space-around',
                        alignContent:'space-around',
                        alignItems:'center',
                        flexWrap:'wrap'
          }}>
            
              <View style={{backgroundColor:"pink", height:150, width:150, margin:15}}>{this.props.info.name.first}</View>
              
            
          </View>
          </ScrollView>
          </View>
          </SafeAreaView>



        )


      }





  }



  export {Tarjeta}
import React from 'react'
import{
    View,
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    headerViewStyle:{
        backgroundColor: 'red',  justifyContent:'center',flex:1, flexDirection:"column"
    },
    headerTextStyle:{
        color: 'white'
    },
    nosotrosContenedor :{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    nosotrosCard:{
        backgroundColor: "blue",
        borderStyle:"solid",
        borderWidth: 1,
        borderRadius: 5,
        width:200,
        height:200,
        padding:10
    },
    headerTarjeta2: {
        flex:1,
        backgroundColor: 'white'
    },

    listContainerTarjeta2: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        
    },
    textoTarjeta2: {
        fontSize: 20
    },
    cardTarjeta2: {
        backgroundColor: 'grey',
        borderRadius: 15,
        flexDirection: 'row',
        margin: 5,
        width: 300,
        height: 100,
        padding: 10
    },
    imageTarjeta2: {
        width: 50,
        height: 50
    },
    modalContainer:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    modal:{
        height: '70%',
        width: '100%',
        backgroundColor:'rgba(0,0,0,0.8)',
        justifyContent:"center",
        alignItems:"center",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderWidth:1,
        borderStyle:"solid",
        borderColor:"black"
    },
    modalText:{
        fontSize:20,
        color:"white"
    }
    
})

export default styles
import React from 'react'
import{
    View,
    StyleSheet
} from 'react-native'
import { withSafeAreaInsets } from 'react-native-safe-area-context'

const styles = StyleSheet.create({
    header:{
        fontWeight:"bold",  
        justifyContent:'space-between',
        alignItems: 'center',
        flex:1, 
        flexDirection:"row",
        fontSize:20
    },
    headerTextStyle:{
        color: 'white',
        justifyContent:'center',
        alignSelf:'center',
        fontSize:17,
        
    },
    addContainer:{
        marginRight: 18
    },
    trashContainer:{
        marginRight: 21
    },
    optionContainer:{
        marginRight: 17
    },
    mainContainer:{
        flex:10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems:'center'
    },
    paginasHeader:{
        fontSize:20,
        fontWeight:"500",
    },
    imageTotal:{
        width:'100%',
        height:'100%'
    },
    nosotrosContenedor :{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    nosotrosCard:{
        backgroundColor:'#fff5ee',
        borderStyle:"solid",
        borderWidth: 1,
        borderRadius: 10,
        width:300,
        height:150,
        padding:10,
        margin: 5,
        flexDirection:"column"
    },
    nosotrosAnimated:{
        backgroundColor:'red',
        borderStyle:"solid",
        borderWidth: 1,
        borderRadius: 10,
        width:300,
        height:200,
        padding:10,
        margin: 5,
        flexDirection:"column"
    },
    nosotrosText:{
        fontStyle:'italic',
        fontWeight:'bold'
    },
    nosotrosImage:{
        width:50,
        height:50,
    
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
        backgroundColor: '#ffb6c1',
        borderRadius: 15,
        flexDirection: 'column',
        margin: 5,
        width: 350,
        height: 400,
        padding: 10
    },
    imageTarjeta2: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    modalContainer:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    modalGetData:{
        padding: 20,
        backgroundColor: 'white',
        justifyContent:"center",
        alignSelf:"center",
        borderRadius:10,
        borderWidth:1,
        borderStyle:"solid",
        borderColor:"black"
    },
    modal:{
        height: '70%',
        width: '100%',
        backgroundColor:'rgba(0,0,0,0.9)',
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
        color:"white",
    },
    modalButtonClose:{
        position:'absolute',
        right: 20,
        top:10,
        fontSize:20,
        color:"white",
    },
    borrar:{
        padding: 10
    },
    burguerButton:{
        width:60,
        height:60,
        //backgroundColor:"blue",
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
    },
    burguerContainer:{
        
        left:1,
        top:1
    },
    menuContainer:{
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuTitle :{
        fontSize:30 ,
        //backgroundColor: 'cornflowerblue',
        fontWeight: "bold",
        position: 'absolute',
        top: 200
    },
    imagenMenu:{
        width:60,
        height:60
    },
    menuText:{
        fontSize:20,
        color:"black"
        
    },
    TextoInput:{
        height:20,
        margin:12,
        borderWidth:1,
        
    },
    buttonText:{
        position: 'absolute',
        top: 5,
        right:5
    },
    buttonGuardar :{
        position: 'absolute',
        top : 5,
        right:5,
        borderRadius: 5, 
        borderWidth:1,
        fontWeight:'bold'
    },
    contactos:{
        fontWeight:"bold",
        fontStyle:'italic'
    }
})

export default styles
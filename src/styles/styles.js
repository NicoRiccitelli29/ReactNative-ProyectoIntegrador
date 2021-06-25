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
        backgroundColor: 'black',
        alignItems: 'center',
        flex:1, 
        flexDirection:"row",
        fontSize:20
    },
    headerTextStyle:{
        color: 'white',
        fontWeight: '400',
        justifyContent:'center',
        alignSelf:'center',
        fontSize:16,
        
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
        flex:9,
        paddingTop: 17,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems:'center',
        
    },
    footer:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20
    },
    footerButton:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 160,
        padding: 10,
        backgroundColor: 'black',
        borderRadius: 17
    },
    modalButton:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 130,
        padding: 5,
        backgroundColor: 'black',
        borderRadius: 8
    },
    modalButtonText:{
        alignSelf: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 15
    },
    footerButtonText:{
        color: 'white',
        fontSize: 15,
        fontWeight: '400'
    },
    paginasHeader:{
        fontSize:20,
        fontWeight:"500",
    },
    imageTotal:{
        width:'100%',
        height:'100%'
    },
    nosotrosContentContainer :{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"flex-start",
        paddingLeft: 20
    },
    nosotrosCard:{
        backgroundColor: '#eeeff3',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 15,
        flexDirection: 'row',
        margin: 5,
        width: 350,
        height: 100,
        padding: 10
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
    heading:{
        fontSize: 27,
        fontWeight:"bold",
        color: 'black',
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        paddingLeft: 17,
        paddingBottom: 17
        
    },
    textoTarjeta2: {
        fontSize: 10
    },
    cardTitleContainer: {
        fontSize: 18,
        fontWeight: '500'
    },
    cardTarjeta2: {
        backgroundColor: '#eeeff3',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 15,
        flexDirection: 'row',
        margin: 5,
        width: 350,
        height: 100,
        padding: 10
    },
    cardContentContainer: {
        justifyContent: 'space-between'
    },
    cardImageContainer: {
        width: 55,
        height: 55,
        borderRadius: 40
    },
    searchBar: {
        width: 350,
        height:30,
        margin:12,
        borderWidth:0.5,
        borderColor: 'grey',
        borderRadius: 15,
        
        
    },
    modalContainer:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    modalGetData:{
        padding: 20,
        backgroundColor: '#eeeff3',
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        borderRadius:10,
        shadowColor: '#eeeff9',
        shadowRadius: 3,
        shadowOffset: {width: 1,height: 1},
        shadowOpacity: 6
       
        
    },
    modal:{
        height: '70%',
        width: '90%',
        backgroundColor:'rgba(0,0,0,0.9)',
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 40,
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
    cardButtonContainer:{
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
    menuContent:{
        fontSize: 15,
        top: 230
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
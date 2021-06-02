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
    }
})

export default styles
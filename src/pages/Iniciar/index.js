import {StatusBar} from "react"
import {View, StyleSheet, Image, Text, TouchableOpacity } from "react-native"
import {useNavigation} from "@react-navigation/native"
import * as Animatable from 'react-native-animatable'

export default function Iniciar(){
    const navigation= useNavigation()
    return(
        <View style = {styles.container}>
            <View style = {styles.containerHeader}>
            <Text style = {styles.tittle}>
                Bem Vindo!
            </Text>
            <TouchableOpacity onPress ={()=>navigation.navigate("Quiz1")} style = {styles.button}>
                <Text style = {styles.buttonText}>
                    Começar
                </Text>
            </TouchableOpacity>
            </View>
            <View style = {styles.containerImage}>
                <Animatable.Image iterationCount='infinite' animation='tada' style = {styles.cerebro} source={require('../../assets/cerebro.jpeg')}/>  
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    cerebro:{
        width: '80%',
        height: '60%',
        alignSelf: 'center'
    },
    containerHeader:{
        height: '60%',
        marginTop: '5%',
    },
    containerImage:{
        height: '50%',
    },
    tittle:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 34,
        alignSelf: 'center'
    },
    buttonText:{
        fontWeight: 'bold',
        fontSize: 22,
        alignSelf: 'center'
    }
})
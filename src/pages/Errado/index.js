import {StatusBar} from "react"
import {View, StyleSheet, Image, Text, TouchableOpacity } from "react-native"
import {useNavigation} from "@react-navigation/native"
import { Animation } from "react-native-animatable"

export default function Errado(){
    const navigation= useNavigation()
    return(
        <View style = {styles.container}>
            <View style = {styles.containerHeader}>
            <Text style = {styles.tittle}>
            X
            </Text>
            <TouchableOpacity onPress = {()=>navigation.navigate('Iniciar')}style = {styles.button}>
                <Text style = {styles.buttonText}>
                    Reiniciar
                </Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    containerHeader:{
        height: '90%',
        justifyContent: 'center'
    },
    tittle:{
        color: '#fff',
        fontWeight: '900',
        fontSize: 300,
        alignSelf: 'center',
    },
    buttonText:{
        fontWeight: 'bold',
        fontSize: 22,
        alignSelf: 'center',
        color: 'white',
    },
})
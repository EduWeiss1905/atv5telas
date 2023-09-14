import {StatusBar} from "react"
import {View, StyleSheet, Image, Text, TouchableOpacity } from "react-native"
import {useNavigation} from "@react-navigation/native"

export default function Iniciar(){
    const navigation= useNavigation()
    return(
        <View style = {styles.container}>
            <View style = {styles.containerHeader}>
            <Text style = {styles.tittle}>
                Bem Vindo
            </Text>
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>
                    Começar!
                </Text>
            </TouchableOpacity>
            </View>
            <View style = {styles.containerImage}>
                <Image style = {styles.angrybirds} source={require('../../assets/angrybirds.jpg')}/>  
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#CE2CE5',
    },
    angrybirds:{
        width: '80%',
        height: '60%',
        alignSelf: 'center'
    },
    containerHeader:{
        height: '60%',
        marginTop: '5%'
    },
    containerImage:{
        height: '50%',
    },
    tittle:{
        color: '#fff',
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
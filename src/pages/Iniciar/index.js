import {StatusBar} from "react"
import {View, StyleSheet, Image } from "react-native"
import {useNavigation} from "@react-navigation/native"

export default function Iniciar(){
    return(
        <View>
            <Image source={require('../../assets/Union.png')}/> 
        </View>
    )
}

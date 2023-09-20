import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Animation } from "react-native-animatable"

export default function Quiz2() {
 const navigation = useNavigation();

 return (
 <View style={styles.container}>
 <Text style={styles.title}>Meu trabalho ficou bom???</Text>
    <View style={styles.imageContainer}>
    </View>
    <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Final')} style={styles.button}>
 <Text style={styles.buttonText}>Simm, adoro o Edu!!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Errado')} style={styles.button}>
 <Text style={styles.buttonText}>Não, odeio o Edu!!</Text>
        </TouchableOpacity>
     </View>
 </View>
 );
}


const styles = StyleSheet.create({
 container: {
 flex: 1,
 backgroundColor: 'white',
alignItems: 'center',
justifyContent: 'center',
},
imageContainer: {
flexDirection: 'row',
alignItems: 'center',
},
buttonContainer: {
flexDirection: 'row',
marginTop: 20,
},
button: {
backgroundColor: 'black',
padding: 10,
margin: 10,
borderRadius: 18,
},
buttonText: {
fontSize: 18,
fontWeight: 'bold',
color: '#fff',
},
title: {
fontSize: 30,
fontWeight: 'bold',
},
});
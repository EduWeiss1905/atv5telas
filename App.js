import { StatusBar } from "react";
import { Statusbar } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/Routes"

export default function App(){
  return(
<NavigationContainer>
  <StatusBar backgroundColor="#38A69D" barStyle="light-content"/> 
  <Routes/>
</NavigationContainer>
  )
}
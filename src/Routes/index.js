import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Iniciar from "../pages/Iniciar"
import Errado from "../pages/Errado"
import Certo from "../pages/Certo"

const Stack = createNativeStackNavigator();
export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name = 'Iniciar' 
            component={Iniciar} 
            options= { { headerShown: false} }
            />
             <Stack.Screen
            name = 'Errado' 
            component={Errado} 
            options= { { headerShown: false} }
            />
             <Stack.Screen
            name = 'Certo' 
            component={Certo} 
            options= { { headerShown: false} }
            />
        </Stack.Navigator>
    )
}
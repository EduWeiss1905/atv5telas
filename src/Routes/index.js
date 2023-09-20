import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Iniciar from "../pages/Iniciar"
import Errado from "../pages/Errado"
import Certo from "../pages/Certo"
import Quiz1 from "../pages/Quiz1"
import Quiz2 from "../pages/Quiz2"
import Final from "../pages/Final"

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
            <Stack.Screen
            name = 'Quiz1' 
            component={Quiz1} 
            options= { { headerShown: false} }
            />
             <Stack.Screen
            name = 'Quiz2' 
            component={Quiz2} 
            options= { { headerShown: false} }
            />
            <Stack.Screen
            name = 'Final' 
            component={Final} 
            options= { { headerShown: false} }
            />
        </Stack.Navigator>
    )
}
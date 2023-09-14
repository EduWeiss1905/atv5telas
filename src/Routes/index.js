import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Iniciar from "../pages/Iniciar"

const Stack = createNativeStackNavigator();
export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name = 'Iniciar' 
            component={Iniciar} 
            options= { { headerShown: false} }
            />
        </Stack.Navigator>
    )
}
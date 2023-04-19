import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Settings from './screens/Settings';

const Stack = createNativeStackNavigator()

export default function App() {

  return (

  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Settings" component={Settings} />
    <Stack.Screen name="Profil" component={Profil} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}

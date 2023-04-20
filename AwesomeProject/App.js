import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from './screens/Settings';
import Profil from './screens/Profil';
import Camera from './screens/Camera';
import { Provider as PaperProvider } from 'react-native-paper';
import PagerView from 'react-native-pager-view';


const Stack = createNativeStackNavigator()

export default function App() {

  return (

  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Settings" component={Settings} />
    <Stack.Screen name="Profil" component={Profil} />
    <Stack.Screen name='Camera' component={Camera} options={{ title: 'Camera' }} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}

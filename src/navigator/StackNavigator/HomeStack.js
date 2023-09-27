import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/HomeScreen/HomeScreen';
import DetailScreen from '../../screens/DetailScreen/DetailScreen';
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;

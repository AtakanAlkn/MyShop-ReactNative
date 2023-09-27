import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FavoriteScreen from '../../screens/FavoriteScreen/FavoriteScreen';
import DetailScreen from '../../screens/DetailScreen/DetailScreen';
const Stack = createNativeStackNavigator();

const FavoriteStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default FavoriteStack;

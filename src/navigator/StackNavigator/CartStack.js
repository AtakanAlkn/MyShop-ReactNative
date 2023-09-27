import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from '../../screens/CartScreen/CartScreen';
import DetailScreen from '../../screens/DetailScreen/DetailScreen';
const Stack = createNativeStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default CartStack;

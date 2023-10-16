import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './CartScreenStyle';
import {useSelector} from 'react-redux';
import CartCard from './Components/CartCard';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CartScreen = ({navigation}) => {
  const cart = useSelector(state => state.cart.inCartProducts);

  const renderCard = ({item}) => {
    return (
      <CartCard
        item={item}
        onPress={() => navigation.navigate('DetailScreen', {item})}
      />
    );
  };
  const total = cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);

  return cart.length !== 0 ? (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderCard}
        keyExtractor={item => item.id.toString()}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          marginTop: 10,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
          Total:
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
          ${total}
        </Text>
      </View>
      <View style={{paddingHorizontal: 10, marginTop: 10}}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e83b2e',
            borderRadius: 16,
            paddingVertical: 8,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              fontSize: 20,
            }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <View style={{marginBottom: 20}}>
        <Icon name="shopping-cart" size={100} solid color={'#347aeb'} />
      </View>
      <Text style={{color: '#000000', fontWeight: 'bold'}}>
        You haven't added any products yet
      </Text>
      <Text style={{color: '#000000', fontWeight: 'bold', marginTop: 20}}>
        Discover the products that interest you now
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeStack')}
        style={{
          backgroundColor: '#347aeb',
          borderRadius: 15,
          paddingHorizontal: 60,
          paddingVertical: 8,
          marginTop: 20,
        }}>
        <Text style={{fontWeight: 'bold', color: '#FFFFFF', fontSize: 18}}>
          Discover Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;

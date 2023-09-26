import {React, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {remove} from '../../../redux/FavoriteSlice';
import {addCart} from '../../../redux/CartSlice';
import Star from './Star';

const FavoriteCard = ({item}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.inCartProducts);
  const [isDisabled, setIsDısabled] = useState(false);
  useEffect(() => {
    cart.includes(item) ? setIsDısabled(true) : setIsDısabled(false);
  }, [cart]);
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
          marginRight: 15,
        }}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: 'black',
              marginBottom: 5,
            }}
            numberOfLines={2}>
            {item.title}
          </Text>
          <TouchableWithoutFeedback
            onPress={() => {
              dispatch(remove(item.id));
            }}>
            <Icon
              name="trash"
              size={15}
              color={'black'}
              style={{marginTop: 5}}
            />
          </TouchableWithoutFeedback>
        </View>
        <Star number={item.rating.rate} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
            ${item.price}
          </Text>
          <TouchableWithoutFeedback
            onPress={() => dispatch(addCart(item))}
            disabled={isDisabled}>
            <View
              style={{
                backgroundColor: '#347aeb',
                borderRadius: 15,
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}>
              {isDisabled ? (
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  In Cart
                </Text>
              ) : (
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  + Add to cart
                </Text>
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default FavoriteCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#e6d9d8',
    margin: 10,
    borderRadius: 15,
    padding: 10,
    flex: 1,
  },
  image: {
    resizeMode: 'contain',
    width: 90,
    minHeight: 100,
    borderRadius: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import Star from '../../FavoriteScreen/components/Star';
import {add} from '../../../redux/FavoriteSlice';
import {removeCart} from '../../../redux/CartSlice';
const CartCard = ({item}) => {
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.favorite.favoriteProducts);
  const [isDisabled, setIsDısabled] = useState(false);

  useEffect(() => {
    favorite.includes(item) ? setIsDısabled(true) : setIsDısabled(false);
  }, [favorite]);
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
              dispatch(removeCart(item.id));
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
            onPress={() => {
              dispatch(add(item));
            }}
            disabled={isDisabled}>
            <View
              style={{
                backgroundColor: '#e83b2e',
                borderRadius: 15,
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}>
              {isDisabled ? (
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  In Favorite
                </Text>
              ) : (
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  + Add to favorite
                </Text>
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default CartCard;

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

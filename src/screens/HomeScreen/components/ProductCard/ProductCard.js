import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector, useDispatch} from 'react-redux';
import {add, remove} from '../../../../redux/FavoriteSlice';
import {addCart, removeCart} from '../../../../redux/CartSlice';

const ProductCard = ({item}) => {
  const [isFill, setIsFill] = useState(false);
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.favorite.favoriteProducts);
  const cart = useSelector(state => state.cart.inCartProducts);
  const [isDisabled, setIsDısabled] = useState(false);
  useEffect(() => {
    cart.includes(item) ? setIsDısabled(true) : setIsDısabled(false);
  }, [cart]);
  useEffect(() => {
    favorite.includes(item) ? setIsFill(true) : setIsFill(false);
  }, [favorite]);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{item.rating.rate}</Text>
        </View>
        <View>
          <TouchableWithoutFeedback
            onPress={() => {
              favorite.includes(item)
                ? dispatch(remove(item.id))
                : dispatch(add(item));
            }}>
            {isFill ? (
              <Icon name="heart" size={20} color={'red'} solid />
            ) : (
              <Icon name="heart" size={20} />
            )}
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.price}>${item.price}</Text>
          <TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => dispatch(addCart(item))}
              disabled={isDisabled}>
              <View style={styles.addButton}>
                {isDisabled ? (
                  <Text style={{color: 'black', fontWeight: 'bold'}}>
                    In Cart
                  </Text>
                ) : (
                  <Text style={{color: 'black', fontWeight: 'bold'}}>Add</Text>
                )}
              </View>
            </TouchableWithoutFeedback>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 15,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingContainer: {
    backgroundColor: '#347aeb',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    height: 35,
    paddingHorizontal: 2,
  },
  rating: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    resizeMode: 'contain',
    width: Dimensions.get('window').width / 3,
    height: 100,
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    marginVertical: 7,
  },
  description: {
    fontSize: 15,
    marginBottom: 7,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#347aeb',
  },
  addButton: {
    backgroundColor: '#9cc9db',
    paddingVertical: 3,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
});

import Rect, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Star from '../FavoriteScreen/components/Star';
import styles from './DetailScreenStyle';
import {UseSelector, useDispatch, useSelector} from 'react-redux';
import {add} from '../../redux/FavoriteSlice';
import {addCart} from '../../redux/CartSlice';

const DetailScreen = ({route, navigation}) => {
  const {item} = route.params;
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.favorite.favoriteProducts);
  const cart = useSelector(state => state.cart.inCartProducts);
  const [isFavorite, setIsFavorite] = useState();
  useEffect(() => {
    if (favorite.includes(item)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favorite]);
  const onFavorite = () => {
    isFavorite ? null : dispatch(add(item));
  };
  const onCart = () => {
    if (cart.includes(item)) {
      navigation.navigate('CartStack');
    } else {
      dispatch(addCart(item));
      navigation.navigate('CartStack');
    }
  };
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.priceContainer}>
            <View style={styles.ratingContainer}>
              <Star number={item.rating.rate} />
              <Text style={styles.rate}>{item.rating.rate}</Text>
            </View>
            <Text style={styles.price}>${item.price}</Text>
          </View>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.favoriteButton} onPress={onFavorite}>
            {isFavorite ? (
              <Text style={styles.buttonText}>In Favorites</Text>
            ) : (
              <Text style={styles.buttonText}>Add To Favorites</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyButton} onPress={onCart}>
            <Text style={styles.buttonText}>Buy</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default DetailScreen;

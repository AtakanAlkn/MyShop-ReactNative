import React, {useEffect, useState} from 'react';
import {View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import styles from './FavoriteScreenStyle';
import {useSelector, useDispatch} from 'react-redux';
import {add, remove} from '../../redux/FavoriteSlice';
import FavoriteCard from './components/FavoriteCard';
import Icon from 'react-native-vector-icons/FontAwesome5';

const FavoriteScreen = ({navigation}) => {
  const renderCard = ({item}) => {
    return (
      <FavoriteCard
        item={item}
        onPress={() => navigation.navigate('DetailScreen', {item})}
      />
    );
  };

  const dispatch = useDispatch();
  const favorite = useSelector(state => state.favorite.favoriteProducts);

  return favorite.length !== 0 ? (
    <View style={styles.container}>
      <FlatList
        data={favorite}
        renderItem={renderCard}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
      />
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
        <Icon name="heart" size={100} solid color={'#347aeb'} />
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

export default FavoriteScreen;

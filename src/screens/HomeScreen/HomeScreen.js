import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import styles from './HomeScreenStyle';
import Icon from 'react-native-vector-icons/Feather';
import fetchData from '../hooks/useFetch/useFetch';
import config from '../../../config';
import ProductCard from './components/ProductCard/ProductCard';
import LottieView from 'lottie-react-native';

const HomeScreen = () => {
  const numColumns = 2;
  const URL = config.API_URL;

  const {products, productCategories} = fetchData(URL);
  const [newProducts, setNewProducts] = useState();
  const [selected, setSelected] = useState();
  const [isSelected, setIsSelected] = useState(true);
  const [isSort, setIsSort] = useState(false);

  useEffect(() => {
    setNewProducts(products);
  }, [products]);

  const onSort = () => {
    let sortedProducts;
    isSort
      ? (setIsSort(!isSort),
        (sortedProducts = [...newProducts].sort((a, b) => a.price - b.price)),
        setNewProducts(sortedProducts))
      : (setIsSort(!isSort),
        (sortedProducts = [...newProducts].sort((a, b) => b.price - a.price)),
        setNewProducts(sortedProducts));
  };

  const onSearch = text => {
    if (text) {
      const filtered = newProducts.filter(e =>
        e.title.toUpperCase().startsWith(text.toUpperCase()),
      );
      setNewProducts(filtered);
    } else {
      setNewProducts(products);
    }
  };
  const renderCategory = ({item}) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          const filtered = products.filter(
            element => element.category.toUpperCase() === item.toUpperCase(),
          );
          setNewProducts(filtered);
          setSelected(item);
          setIsSelected(false);
        }}>
        <View
          style={{
            backgroundColor: item === selected ? '#347aeb' : 'transparent',
            padding: 10,
            marginLeft: 20,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#347aeb',
          }}>
          <Text
            style={{
              color: item === selected ? 'white' : 'black',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            {item}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const renderProduct = ({item}) => {
    return <ProductCard item={item} />;
  };

  return products.length !== 0 ? (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 10}}>
        <View style={styles.header}>
          <Icon name="align-left" size={30} color="black" />
          <TextInput
            style={styles.search}
            placeholder="Search..."
            placeholderTextColor="black"
            onChangeText={text => onSearch(text)}
          />
          <View
            style={{
              zIndex: 1,
              position: 'absolute',
              right: 20,
            }}>
            <Icon name="search" size={30} color="black" />
          </View>
        </View>
        <View style={styles.categoriesContainer}>
          <View style={styles.popularContainer}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              Popular Products
            </Text>
            <TouchableWithoutFeedback onPress={onSort}>
              <View style={styles.sortContainer}>
                <Text style={{color: 'black'}}>Sort by</Text>
                {isSort ? (
                  <Icon name="chevron-up" size={20} color="black" />
                ) : (
                  <Icon name="chevron-down" size={20} color="black" />
                )}
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.categories}>
            <FlatList
              data={productCategories}
              renderItem={renderCategory}
              horizontal
              showsHorizontalScrollIndicator={false}
              ListHeaderComponent={
                <TouchableWithoutFeedback
                  onPress={() => {
                    setIsSelected(true),
                      setSelected([]),
                      setNewProducts(products);
                  }}>
                  <View
                    style={{
                      backgroundColor: isSelected ? '#347aeb' : 'transparent',
                      padding: 10,
                      borderWidth: 1,
                      borderRadius: 5,
                      borderColor: '#347aeb',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: isSelected ? 'white' : 'black',
                        fontWeight: 'bold',
                        fontSize: 16,
                      }}>
                      All categories
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              }
            />
          </View>
        </View>
      </View>
      <FlatList
        data={newProducts}
        renderItem={renderProduct}
        keyExtractor={item => item.id.toString()}
        numColumns={numColumns}
      />
    </View>
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',

        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LottieView
        source={require('../../assets/animations/animation_ln0f8fgk.json')}
        autoPlay={false}
      />
    </View>
  );
};

export default HomeScreen;

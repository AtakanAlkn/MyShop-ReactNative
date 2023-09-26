import React from 'react';
import {StatusBar, View, Button, TouchableWithoutFeedback} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import FavoriteScreen from './screens/FavoriteScreen/FavoriteScreen';
import CartScreen from './screens/CartScreen/CartScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import BackIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
          tabBarStyle: [
            {
              display: 'flex',
            },

            null,
          ],

          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let backgroundColor;

            if (route.name === 'HomeScreen') {
              iconName = 'home';
            } else if (route.name === 'FavoriteScreen') {
              iconName = 'heart';
            } else if (route.name === 'CartScreen') {
              iconName = 'shopping-cart';
            } else if (route.name === 'ProfileScreen') {
              iconName = 'user';
            }

            if (focused) {
              backgroundColor = '#347aeb'; // Tıklanan ikonun arka plan rengi
            } else {
              backgroundColor = 'transparent'; // Tıklanmayan ikonun arka plan rengi
            }

            return (
              <View
                style={{
                  backgroundColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: size * 1.8,
                  height: size * 1.8,
                  borderRadius: 15,
                }}>
                <Icon name={iconName} size={size} color={color} />
              </View>
            );
          },
        })}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="FavoriteScreen"
          component={FavoriteScreen}
          options={({navigation}) => ({
            headerTitleAlign: 'center',
            headerTitle: 'My Favorites',
            headerLeft: () => (
              <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Icon
                  name="arrow-left"
                  size={20}
                  color={'black'}
                  style={{marginLeft: 20}}
                />
              </TouchableWithoutFeedback>
            ),
          })}
        />
        <Tab.Screen
          name="CartScreen"
          component={CartScreen}
          options={({navigation}) => ({
            headerTitleAlign: 'center',
            headerTitle: 'My Cart',
            headerLeft: () => (
              <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Icon
                  name="arrow-left"
                  size={20}
                  color={'black'}
                  style={{marginLeft: 20}}
                />
              </TouchableWithoutFeedback>
            ),
          })}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={({navigation}) => ({
            headerTitleAlign: 'center',
            headerTitle: 'My Profile',

            headerLeft: () => (
              <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Icon
                  name="arrow-left"
                  size={20}
                  color={'black'}
                  style={{marginLeft: 20}}
                />
              </TouchableWithoutFeedback>
            ),
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;

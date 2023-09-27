import React from 'react';
import {StatusBar, View, TouchableWithoutFeedback} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeStack from './navigator/StackNavigator/HomeStack';
import FavoriteStack from './navigator/StackNavigator/FavoriteStack';
import CartStack from './navigator/StackNavigator/CartStack';
import ProfileStack from './navigator/StackNavigator/ProfileStack';

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

            if (route.name === 'HomeStack') {
              iconName = 'home';
            } else if (route.name === 'FavoriteStack') {
              iconName = 'heart';
            } else if (route.name === 'CartStack') {
              iconName = 'shopping-cart';
            } else if (route.name === 'ProfileStack') {
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
          name="HomeStack"
          component={HomeStack}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="FavoriteStack"
          component={FavoriteStack}
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
          name="CartStack"
          component={CartStack}
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
          name="ProfileStack"
          component={ProfileStack}
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

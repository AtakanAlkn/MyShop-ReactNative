import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Star = ({number}) => {
  const newNumber = Math.round(number);
  const stars = [];
  for (let i = 0; i < newNumber; i++) {
    stars.push(
      <View key={i}>
        <Icon name="star" solid color={'#e8ca1e'} />
      </View>,
    );
  }
  return <View style={{flexDirection: 'row'}}>{stars}</View>;
};

export default Star;

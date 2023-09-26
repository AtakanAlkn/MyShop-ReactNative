import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './ProfileScreenStyle';
import Icon from 'react-native-vector-icons/Feather';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, backgroundColor: 'white'}}></View>
      <View style={styles.innerContainer}>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
          }}>
          <Icon name="edit" color={'#347aeb'} size={25} style={{margin: 20}} />
        </View>

        <View
          style={{
            paddingBottom: 20,
            paddingHorizontal: 120,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 60,
              width: 60,
              borderRadius: 30,
              backgroundColor: 'black',
            }}></View>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: 16,
              marginVertical: 10,
            }}>
            Atakan Alkan
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>@atakanalkn</Text>
        </View>
      </View>

      <View
        style={{
          flex: 2,
          backgroundColor: '#347aeb',
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          borderRadius: 20,
          marginBottom: 20,
        }}>
        <View style={{...styles.buttonContainer, marginTop: 130}}>
          <Icon name="bell" size={20} />
          <Text style={styles.text}>Dashboard</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Icon name="bell" size={20} />
          <Text style={styles.text}>Payment History</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Icon name="bell" size={20} />
          <Text style={styles.text}>Statics</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Icon name="bell" size={20} />
          <Text style={styles.text}>Logout</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

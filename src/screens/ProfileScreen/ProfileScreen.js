import React from 'react';
import {View, Text, TouchableWithoutFeedback, Dimensions} from 'react-native';
import styles from './ProfileScreenStyle';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';

const ProfileScreen = () => {
  const user = useSelector(state => state.user.userData);

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
            minWidth: Dimensions.get('window').width / 1.2,
            paddingHorizontal: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 60,
              width: 60,
              borderRadius: 30,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(160, 193, 210)',
            }}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
              {user.name.firstname[0].toUpperCase()}
            </Text>
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: 16,
              marginVertical: 10,
            }}>
            {user.name.firstname.toUpperCase()}{' '}
            {user.name.lastname.toUpperCase()}
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>
            @{user.username}
          </Text>
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

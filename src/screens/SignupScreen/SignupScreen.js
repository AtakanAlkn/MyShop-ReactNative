import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './SignupScreenStyle';

const SignupScreen = ({navigation}) => {
  const copyright = String.fromCodePoint(0x00a9);
  const onLoginScreen = () => {
    navigation.navigate('LoginScreen');
  };
  const onLogin = () => {
    navigation.navigate('TabNavigator');
  };

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.header}>My Shop</Text>
      </View>
      <View style={styles.secondContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.textContainer}>
            <Text style={styles.welcome}>Welcome</Text>
            <Text style={styles.text}>
              Please sign up with your information
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <View>
              <TextInput style={styles.input} placeholder="Name" />
              <TextInput style={styles.input} placeholder="Surname" />
              <TextInput style={styles.input} placeholder="E-mail" />
              <TextInput style={styles.input} placeholder="Password" />
              <TextInput style={styles.input} placeholder="Repeat Password" />
            </View>
            <View style={styles.thirdContainer}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text>Remember me</Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Text>Forgot password</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onLoginScreen}>
                  <Text
                    style={{
                      color: '#422A96',
                      fontStyle: 'italic',
                      fontWeight: 'bold',
                    }}>
                    Have An Account
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                alignItems: 'center',
              }}>
              <TouchableOpacity style={styles.button} onPress={onLogin}>
                <Text style={styles.buttonText}>SIGN UP</Text>
              </TouchableOpacity>
              <Text>{copyright}AtakanAlkan</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default SignupScreen;

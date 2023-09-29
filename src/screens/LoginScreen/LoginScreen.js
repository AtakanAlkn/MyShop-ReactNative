import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import styles from './LoginScreenStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Formik} from 'formik';
import config from '../../../config';
import usePost from '../../hooks/usePost/usePost';

const LoginScreen = ({navigation}) => {
  const copyright = String.fromCodePoint(0x00a9);
  const onSignInScreen = () => {
    navigation.navigate('SignupScreen');
  };
  const {loading, setLoading, postUser} = usePost();

  const URL = config.USER_API_URL;
  const onLogin = async values => {
    const isTrue = await postUser(URL, values);
    if (isTrue) {
      navigation.navigate('TabNavigator');
    }
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
            <Text style={styles.text}>Please log in with your information</Text>
          </View>
          <Formik initialValues={{email: '', password: ''}} onSubmit={onLogin}>
            {({handleChange, handleSubmit, values}) => (
              <View style={styles.inputContainer}>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                    }}>
                    <TextInput
                      style={styles.input}
                      placeholder="E-mail"
                      onChangeText={handleChange('email')}
                      value={values.email}
                    />
                    <View
                      style={{
                        borderBottomWidth: 1,
                        paddingRight: 10,
                      }}>
                      <Icon name="email-outline" size={20} />
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                      marginVertical: 20,
                    }}>
                    <TextInput
                      style={styles.input}
                      placeholder="Password"
                      onChangeText={handleChange('password')}
                      value={values.password}
                      secureTextEntry={true}
                    />
                    <View
                      style={{
                        borderBottomWidth: 1,
                        paddingRight: 10,
                      }}>
                      <Icon name="key-outline" size={20} />
                    </View>
                  </View>
                </View>
                <View style={styles.thirdContainer}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text>Remember me</Text>
                  </View>
                  <View>
                    <TouchableOpacity>
                      <Text>Forgot password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onSignInScreen}>
                      <Text
                        style={{
                          color: '#422A96',
                          fontStyle: 'italic',
                          fontWeight: 'bold',
                        }}>
                        Sign Up Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    disabled={loading}
                    style={styles.button}
                    onPress={handleSubmit}>
                    {loading ? (
                      <ActivityIndicator color="white" />
                    ) : (
                      <Text style={styles.buttonText}>LOGIN</Text>
                    )}
                  </TouchableOpacity>
                  <Text>{copyright}AtakanAlkan</Text>
                </View>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    </View>
  );
};
export default LoginScreen;

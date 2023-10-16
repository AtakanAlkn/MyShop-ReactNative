import {useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {addUser} from '../../redux/UserSlice';
import {Alert} from 'react-native';

const usePost = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const postUser = async (url, user) => {
    try {
      setLoading(true);
      const {data: responseData} = await axios.get(url);
      const email = responseData.map(item => item.email);
      if (email.includes(user.email)) {
        const password = responseData.filter(item => item.email === user.email);
        if (password[0].password === user.password) {
          setUser(password);
          dispatch(addUser(password[0]));
          setLoading(false);
          return true;
        } else {
          Alert.alert('Wrong password', '', [
            {
              text: 'OK',
              onPress: () => {
                setLoading(false);
              },
            },
          ]);
        }
      } else {
        Alert.alert('E-mail was not found', '', [
          {
            text: 'OK',
            onPress: () => {
              setLoading(false);
            },
          },
        ]);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      return false;
    }
  };

  return {loading, setLoading, user, postUser};
};

export default usePost;

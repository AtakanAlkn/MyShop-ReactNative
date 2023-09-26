import * as reactNative from 'react-native';
import {Dimensions} from 'react-native';

const styles = reactNative.StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  innerContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 2,
    borderRadius: 18,
    borderWidth: 1,
    top: 100,
    right: Dimensions.get('window').width / 15,
  },
  buttonContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 5,
    marginTop: 30,
    marginHorizontal: 30,
    flexDirection: 'row',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 30,
  },
});
export default styles;

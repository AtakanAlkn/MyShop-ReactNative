import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#8A71D4',
    flex: 6,
  },
  firstContainer: {
    backgroundColor: '#8A71D4',
    alignItems: 'center',
    flex: 2,
    justifyContent: 'center',
  },
  image: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
  },
  header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
  secondContainer: {
    backgroundColor: 'white',
    flex: 3,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 40,
  },
  welcome: {
    color: '#422A96',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 5,
  },
  text: {
    marginBottom: 5,
    fontSize: 15,
  },
  inputContainer: {marginTop: 30},
  input: {borderBottomWidth: 1, marginBottom: 20},
  thirdContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    marginBottom: 10,
    backgroundColor: '#422A96',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 250,
    borderRadius: 20,
    marginTop: 20,
    shadowColor: 'blue',
    elevation: 20, // Android için yedek gölge
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

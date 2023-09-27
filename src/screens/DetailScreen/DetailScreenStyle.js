import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingTop: 20,
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '50%',
  },
  innerContainer: {
    flex: 1,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 30,
  },
  title: {
    color: '#347aeb',
    fontWeight: 'bold',
    fontSize: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rate: {
    color: '#e8ca1e',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  price: {
    color: '#e83b2e',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginHorizontal: 30,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  buyButton: {
    flex: 1,
    backgroundColor: '#e83b2e',
    paddingVertical: 10,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  favoriteButton: {
    flex: 1,
    backgroundColor: '#e61037',
    paddingVertical: 10,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;

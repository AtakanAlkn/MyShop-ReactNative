import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 35,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  search: {
    flex: 1,
    height: 40,
    marginHorizontal: 10,
    padding: 5,
    borderRadius: 10,
    borderWidth: 2,
  },
  categoriesContainer: {},
  popularContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  sortContainer: {flexDirection: 'row'},
  categories: {marginBottom: 20},
});

export default styles;

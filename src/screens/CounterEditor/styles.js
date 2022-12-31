import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  buttonContainer: {
    height: height * 0.1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  addCounterButton: {
    backgroundColor: '#1DE9B6',
    padding: '2%',
    borderRadius: 5,
  },
  addCounterLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
  listContainer: {
    height: height * 0.9,
  },
});

export default styles;

import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  buttonContainer: {
    height: height * 0.12,
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
    fontFamily: 'Montserrat-Bold',
  },
  openClockButton: {
    marginTop: height * 0.02,
    backgroundColor: '#424242',
    padding: '2%',
    borderRadius: 5,
  },
  openClockLabel: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
  },
  listContainer: {
    height: height * 0.88,
  },
});

export default styles;

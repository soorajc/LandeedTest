import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  timeInfoContainer: {
    margin: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#909497',
    elevation: 5,
    height: height * 0.1,
  },
  currentTimeLabel: {
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
  },
  timeDetailsLabel: {
    color: 'white',
    fontFamily: 'Montserrat-Regular',
  },
});

export default styles;

import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  titleContainer: {
    height: height * 0.1,
    backgroundColor: '#273746',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    color: 'white',
    marginLeft: '2%',
    fontSize: height * 0.03,
    fontFamily: 'Montserrat-Bold',
  },
  description: {
    textAlign: 'left',
    margin: '4%',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: height * 0.018,
  },
  button: {
    width: width * 0.4,
    borderRadius: 5,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    height: height * 0.05,
    alignSelf: 'center',
    marginTop: height * 0.02,
  },
  buttonLabel: {
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
  },
  currentTimeLabel: {
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
  },
  backButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#273746',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: height * 0.01,
  },
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
  },
  timeInfoContainer: {
    margin: '5%',
    padding: '3%',
    borderRadius: 5,
    backgroundColor: '#909497',
    elevation: 5,
  },
  timeDetailsLabel: {
    color: 'white',
    fontFamily: 'Montserrat-Regular',
  },
});

export default styles;

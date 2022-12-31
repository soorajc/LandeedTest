import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#8C9EFF',
    elevation: 5,
    borderRadius: 5,
    alignSelf: 'center',
    width: width * 0.9,
    height: height * 0.08,
    marginLeft: '1%',
    marginRight: '1%',
    marginBottom: '2%',
    marginTop: '2%',
  },
  infoContainer: {
    width: '65%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: 'black',
    fontSize: height * 0.02,
    fontWeight: '700',
  },
  countLabel: {
    color: 'white',
    fontSize: height * 0.018,
    fontWeight: '900',
    backgroundColor: '#3F51B5',
    padding: '2%',
    borderRadius: 5,
  },
  buttonContainer: {
    width: '35%',
    backgroundColor: '#424242',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 5,
  },
  button: {
    width: width * 0.28,
    backgroundColor: '#F50057',
    height: height * 0.055,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    borderRadius: 5,
  },
  buttonLabel: {
    color: 'white',
    fontWeight: '900',
  },
});

export default styles;

import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#8C9EFF',
    elevation: 5,
    borderRadius: 5,
    alignSelf: 'center',
    width: width * 0.8,
    height: height * 0.08,
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '2%',
    marginTop: '2%',
  },
  textContainer: {
    width: '55%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: height * 0.02,
    fontWeight: '900',
  },
  buttonContainer: {
    width: '45%',
    backgroundColor: '#9E9E9E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 5,
  },
  button: {
    width: width * 0.3,
    backgroundColor: '#F50057',
    height: 40,
    margin: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    borderRadius: 5,
  },
});

export default styles;

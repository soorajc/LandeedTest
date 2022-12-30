import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  listContainer: {
    height: height * 0.8,
  },
});

export default styles;

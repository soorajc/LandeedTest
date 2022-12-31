/**
 * Counter Component
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useClock} from 'react-native-timer-hooks';
import PropTypes from 'prop-types';

import styles from './styles';

const Counter = props => {
  const startCount = props.count;
  const [counter, start] = useClock({
    from: startCount,
    to: 0,
    stopOnFinish: true,
    down: true,
  });

  useEffect(() => {
    start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Selected Time: {props.endTime}</Text>
        <Text style={styles.countLabel}>
          {counter === 0 ? 'Finished' : 'Timer: ' + counter + ' seconds'}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.handleDelete(props.id)}>
          <Text style={styles.buttonLabel}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  endTime: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

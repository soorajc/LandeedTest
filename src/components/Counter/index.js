/**
 * Counter Component
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';

import styles from './styles';
import {useClock} from 'react-native-timer-hooks';

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

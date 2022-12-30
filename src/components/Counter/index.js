/**
 * Counter Component
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';
import {useClock} from 'react-native-timer-hooks';

const Counter = props => {
  const startCount = props.count;
  const [counter, start, pause, reset, isRunning] = useClock({
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
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {counter === 0 ? 'Finished' : 'Count ' + counter}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.handleDelete(props.id)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;

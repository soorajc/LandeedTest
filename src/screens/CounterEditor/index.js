/**
 * CounterEditor Screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useCallback} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  FlatList,
  View,
} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import {findDurationInSeconds} from '../../helper';
import Counter from '../../components/Counter';
import styles from './styles';

const CounterEditor = ({navigation}) => {
  const [counterList, setCounterList] = useState([]);
  const [show, setShow] = useState(false);

  const deleteCounter = useCallback(
    id => {
      const currentCounterList = counterList;
      const filteredArray = currentCounterList.filter(item => item.id !== id);
      setCounterList([...filteredArray]);
    },
    [counterList],
  );

  const addCounter = useCallback(() => {
    setShow(true);
  }, []);

  const renderItem = ({item}) => {
    return (
      <Counter
        count={item.count}
        id={item.id}
        endTime={item.endTime}
        handleDelete={deleteCounter}
      />
    );
  };

  const onTimeSelection = useCallback((event, selectedDate) => {
    setShow(false);
    if (event.type === 'set') {
      const durationInfo = findDurationInSeconds(selectedDate);
      setCounterList(prevValues => [durationInfo, ...prevValues]);
    }
  }, []);

  const openWorldClock = useCallback(() => {
    navigation.navigate('WorldClock');
  }, [navigation]);

  return (
    <SafeAreaView>
      {show && (
        <DateTimePicker
          value={new Date()}
          mode="time"
          is24Hour={true}
          display="spinner"
          onChange={onTimeSelection}
        />
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addCounterButton} onPress={addCounter}>
          <Text style={styles.addCounterLabel}>Add a new counter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.openClockButton}
          onPress={openWorldClock}>
          <Text style={styles.openClockLabel}>Open World Clock</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={counterList}
          extraData={counterList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default CounterEditor;

/**
 * CounterEditor Screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  FlatList,
  View,
} from 'react-native';

import Counter from '../../components/Counter';
import styles from './styles';

const CounterEditor = () => {
  const [counterList, setCounterList] = useState([]);

  const deleteCounter = id => {
    const currentCounterList = counterList;
    const filteredArray = currentCounterList.filter(item => item.id !== id);
    setCounterList([...filteredArray]);
  };

  const addCounter = () => {
    let item = {id: Math.random().toFixed(2), count: 20};
    setCounterList(prevValues => [item, ...prevValues]);
  };

  const renderItem = ({item}) => {
    return (
      <Counter count={item.count} id={item.id} handleDelete={deleteCounter} />
    );
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={addCounter}>
        <Text>Add Counter</Text>
      </TouchableOpacity>
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

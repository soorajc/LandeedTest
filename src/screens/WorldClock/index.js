/**
 * WorldClock Screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import {TIME_ZONES} from './config';
import {useTimeZoneApi} from '../../hooks/useTimeZoneApi';
import TimeInfoCard from '../../components/TimeInfoCard';

const {width} = Dimensions.get('window');

const defaultTimeInfo = {
  time: null,
  dayOfWeek: null,
  date: null,
};

const WorldClock = ({navigation}) => {
  const [currentTimeZone, setTimeZone] = useState(null);
  const [getTimeZoneInfo, loading, timeZoneInfo] = useTimeZoneApi();

  const handleTimeZoneSelection = timeZone => {
    setTimeZone(timeZone);
    getTimeZoneInfo(timeZone);
  };

  const renderTimeZoneButton = ({item}) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => handleTimeZoneSelection(item.code)}
        style={[styles.button, {backgroundColor: item.color}]}>
        <Text style={styles.buttonLabel}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Icon name="clock-o" size={width * 0.08} color="#ffffff" />
        <Text style={styles.title}>World Clock</Text>
      </View>
      <Text style={styles.description}>
        Select the timezone to see the current time
      </Text>
      <View>
        <FlatList
          data={TIME_ZONES}
          renderItem={renderTimeZoneButton}
          keyExtractor={item => item.id}
        />
      </View>
      <TimeInfoCard
        timeZoneInfo={timeZoneInfo || defaultTimeInfo}
        loading={loading}
        currentTimeZone={currentTimeZone || null}
      />
      <TouchableOpacity style={styles.backButton} onPress={handleBackButton}>
        <Icon name="arrow-left" size={width * 0.08} color="#D50000" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WorldClock;

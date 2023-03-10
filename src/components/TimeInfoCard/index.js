/**
 * TimeInfoCard Component
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const TimeInfoCard = props => {
  const {time, dayOfWeek, date} = props.timeZoneInfo;
  return (
    <View style={styles.timeInfoContainer}>
      {props.loading ? (
        <ActivityIndicator size="small" color="black" animating />
      ) : (
        <View>
          <Text style={styles.currentTimeLabel}>
            {props.currentTimeZone
              ? 'The current time in ' + props.currentTimeZone
              : 'Please select a time zone'}
          </Text>
          <Text style={styles.timeDetailsLabel}>
            {time} {dayOfWeek} {date}
          </Text>
        </View>
      )}
    </View>
  );
};

export default TimeInfoCard;

TimeInfoCard.propTypes = {
  loading: PropTypes.bool.isRequired,
  currentTimeZone: PropTypes.string,
  timeZoneInfo: PropTypes.shape({
    time: PropTypes.string.isRequired,
    dayOfWeek: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
};

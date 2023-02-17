import {useState} from 'react';
import {Alert} from 'react-native';

import {API_BASE_URL} from '../constants';

export const useTimeZoneApi = () => {
  const [loading, setLoading] = useState(false);
  const [timeZoneInfo, setTimeZoneInfo] = useState(null);

  const getTimeZoneInfo = timeZone => {
    setLoading(true);
    const url = API_BASE_URL + timeZone;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setLoading(false);
        setTimeZoneInfo(data);
      })
      .catch(error => {
        setLoading(false);
        Alert.alert(
          'Message to test the testhouse and codepush',
          'Unable to load the timezone details of ' + timeZone,
        );
        console.log('Error while loading time zone details', error);
      });
  };

  return [getTimeZoneInfo, loading, timeZoneInfo];
};

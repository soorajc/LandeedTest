import moment from 'moment';
import uuid from 'react-native-uuid';

/* This function calculates the duration for counting in seconds, from the
    selected timestamp and the current timestamp.
*/

export const findDurationInSeconds = selectedDate => {
  const startTime = moment().format('HH:mm');
  const endTime = moment(selectedDate).format('HH:mm');

  const startTimeStamp = startTime.split(':');
  const endTimeStamp = endTime.split(':');

  const hours = parseInt(endTimeStamp[0]) - parseInt(startTimeStamp[0]);
  const minutes = parseInt(endTimeStamp[1]) - parseInt(startTimeStamp[1]);

  let durationInSeconds = hours * 60 * 60 + minutes * 60;

  if (durationInSeconds < 0) {
    durationInSeconds = durationInSeconds * -1;
  }

  const counterId = uuid.v4();

  return {id: counterId, count: durationInSeconds, endTime};
};

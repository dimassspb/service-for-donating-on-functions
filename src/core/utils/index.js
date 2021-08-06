import moment from 'moment';
import 'moment-precise-range-plugin';

export const calculateSumOfNumbers = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

export const getFormattedTime = (date) => {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
};

import { renderForm, updateTotalAmount } from './donate-form';
import { renderList, updateDonates } from './donate-list';
import * as utils from '../core/utils/index';

export const state = { donates: [], totalAmount: null };

const app = () => {
  state.totalAmount = state.totalAmount + initialDonatesAmount;
  mockDonates.forEach((donate) => {
    donate.date = utils.getFormattedTime(donate.date);
    state.donates.push(donate);
  });
  renderForm(state);
  renderList(state.donates);

  function createNewDonate(newDonate) {
    state.donates.push(newDonate);
    return state;
  }

  const form = document.querySelector('.donate-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value === '') {
      return false;
    } else {
      let amount = Number(input.value);
      let date = utils.getFormattedTime(new Date());
      let obj = { amount, date };

      state.totalAmount = state.totalAmount + amount;
      input.value = '';
      createNewDonate(obj);
      updateTotalAmount(state.donates);
      updateDonates(state.donates);
    }
  });
};

const mockDonates = [
  { amount: 4, date: new Date() },
  { amount: 20, date: new Date() },
  { amount: 3, date: new Date() },
  { amount: 1, date: new Date() },
];

const initialDonatesAmountArray = mockDonates.map((donate) => {
  return donate.amount;
});

export const initialDonatesAmount = utils.calculateSumOfNumbers(
  initialDonatesAmountArray,
);

export default app;

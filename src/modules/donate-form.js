import { settings as settingsCurrency } from '../core/constants/settings';
import { state } from './app';

export function renderForm() {
  const form = document.createElement('form');
  form.className = 'donate-form';

  const h1 = document.createElement('h1');
  h1.id = 'total-amount';
  h1.textContent = `${state.totalAmount}${settingsCurrency.currency}`;

  const label = document.createElement('label');
  label.className = 'donate-form__input-label';
  label.textContent = `Введите сумму в ${settingsCurrency.currency}`;

  const input = document.createElement('input');
  input.className = 'donate-form__donate-input';
  input.name = 'amount';
  input.type = 'number';
  input.max = '100';
  input.min = '1';
  input.required = '';
  label.append(input);

  const button = document.createElement('button');
  button.className = 'donate-form__submit-button';
  button.type = 'submit';
  button.textContent = 'Задонатить';

  form.append(h1, label, button);
  document.body.append(form);
}

export function updateTotalAmount() {
  const totalAmountHtml = document.getElementById('total-amount');
  totalAmountHtml.textContent = `${state.totalAmount}${settingsCurrency.currency}`;
}

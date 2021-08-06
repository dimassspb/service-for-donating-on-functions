import { settings as settingsCurrency } from '../core/constants/settings';

export function renderList(donates) {
  const divContainer = document.createElement('div');
  divContainer.className = 'donates-container';

  const donatesListHtml = document.createElement('div');
  donatesListHtml.className = 'donates-container__donates';
  const h2 = document.createElement('h2');
  h2.className = 'donates-container__title';
  h2.textContent = 'Список донатов';

  donates.forEach((donate) => {
    const div = document.createElement('div');
    div.className = 'donate-item';
    div.textContent = `${donate.date} - `;
    const b = document.createElement('b');
    b.textContent = `${donate.amount}${settingsCurrency.currency}`;
    div.append(b);
    donatesListHtml.append(div);
  });

  divContainer.append(h2, donatesListHtml);
  document.body.append(divContainer);
}

export function updateDonates(updatedDonates) {
  const donatesListHtml = document.querySelector('.donates-container__donates');
  const divContainer = document.querySelector('.donates-container');
  const h2 = document.querySelector('.donates-container__title');
  donatesListHtml.innerHTML = '';
  updatedDonates.forEach((donate) => {
    const div = document.createElement('div');
    div.className = 'donate-item';
    div.textContent = `${donate.date} - `;
    const b = document.createElement('b');
    b.textContent = `${donate.amount}${settingsCurrency.currency}`;
    div.append(b);
    donatesListHtml.append(div);
  });
  divContainer.append(h2, donatesListHtml);
}
// }

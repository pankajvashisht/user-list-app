import {strings} from 'locales/i18n';

const themeConstant = {
  theme: 'theme',
};

export const userTypes = [
  {
    name: strings('common.admin'),
    value: 'ADMIN',
  },
  {
    name: strings('common.manger'),
    value: 'MANAGER',
  },
];

export {themeConstant};

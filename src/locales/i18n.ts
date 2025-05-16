import ReactNative from 'react-native';
import {Scope, TranslateOptions, I18n} from 'i18n-js';

import en from './en.json';

const i18n = new I18n({en});

i18n.translations = {
  en,
};

export const changeLanguage = (code: string) => {
  i18n.locale = code || 'en';
};

export const isRTL = i18n.locale.indexOf('he') === 0 || i18n.locale.indexOf('ar') === 0;

ReactNative.I18nManager.allowRTL(isRTL);

export const strings = (name: Scope, params?: TranslateOptions): string => i18n.t(name, params);
export default I18n;

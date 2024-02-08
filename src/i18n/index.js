import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEn from './en';
import translationUk from './uk';

import { LOCALS } from "./constants"

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            [LOCALS.EN]: { translation: translationEn },
            [LOCALS.UK]: { translation: translationUk },
        },
        fallbackLng: [LOCALS.EN],
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
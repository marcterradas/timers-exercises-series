import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translations from './translations.json'

const languages = [
    { key: 'es', value: 'Castellà' },
    { key: 'cat', value: 'Català' },
    { key: 'en', value: 'English' }
]

const changeLanguage = ( language ) => {
    i18n.changeLanguage(language)
    localStorage.setItem('language', language)
}

const defaultLanguage = 'en'

translations.fallbackLng = localStorage.getItem('language') || defaultLanguage

i18n.use(initReactI18next).init(translations)

export default {
    languages,
    changeLanguage
}
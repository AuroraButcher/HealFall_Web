import { createI18n} from "vue-i18n";
import zh from '@/language/zh';
import en from '@/language/en';

const languages = {
  zh,
  en
}

const i18n = createI18n({
  // 根据浏览器语言决定初始语言
  // locale: navigator.language,
  // 指定初始语言
  locale: 'zh',
  fallbackLocale: 'en',
  messages: languages,
  legacy: false
})

export default i18n;
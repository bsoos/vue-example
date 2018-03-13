import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    en: {
        message: {
            foo: 'Foo',
        },
    },
    hu: {
        message: {
            foo: 'Fúú',
        },
    },
};

export default new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages,
});
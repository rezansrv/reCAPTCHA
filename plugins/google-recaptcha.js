import { VueReCaptcha } from 'vue-recaptcha-v3';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: '6Lfiz6QpAAAAANl3-J3aARqMPyyhg988SCJ9RZYr',
        loaderOptions: {
            autoHideBadge: false,
            explicitRenderParameters: {
                badge: 'bottomright',
            },
        },
    });
});

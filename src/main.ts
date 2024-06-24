// @ts-nocheck
import { createApp } from 'vue'
import App from './App.vue'

// Global components

import router from '@plugins/router'
import vuetify from '@plugins/vuetify'
import pinia from '@plugins/pinia'
import axios from '@plugins/axios'
import fontAwesomeIcon from '@plugins/font-awesome-icons'
import './style.css'
import Vue3Geolocation from 'vue3-geolocation';

const app = createApp(App)

app.config.globalProperties.axiosInstance = axios.axiosInstance<Object>

app
    .use(vuetify)
    .use(Vue3Geolocation)
    .use(router)
    .use(pinia)
    .component('font-awesome-icon', fontAwesomeIcon)
    .mount('#app')

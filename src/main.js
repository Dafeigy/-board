import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'
import { useUserStore } from './store/userStorage'
import Login from './pages/Login.vue'
import Success from './pages/Success.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const routes = [
    {
        path: '/',
        component: Login,
        name: '/'
    },
    {
        path: '/Success',
        component: Success,
        name: "Success"
    },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

createApp(App).
    use(router).use(pinia).mount('#app')

const userStore = useUserStore();
const token = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')).token : null;
if (token && userStore.checkTokenValidity()) {
  router.push({ name: "Success" });
}

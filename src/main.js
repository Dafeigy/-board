import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createMemoryHistory, createWebHistory, createRouter } from 'vue-router'
import { useUserStore } from './store/userStorage'
import Login from './pages/Login.vue'
import Success from './pages/Success.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)


async function checkTokenValid(token) {
    try {
        console.log("In checkTokenValid, token:")
        console.log(token)
        const response = await axios.get('/api/validate_token', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        console.log(response.data)
        // userStore.setToken(response.data.access_token, isRememberMe.value);
        return true
        // router.push({ name: "Success" });
    } catch (error) {
        // isLogin.value = false;
        return false
        // router.push({ name: "/" });

        // console.error('Auth failed:', error);
        // alert("Wrong username or password");
    }
}
const routes = [
    {
        path: '/',
        component: Login,
        name: '/'
    },
    {
        path: '/Success',
        component: Success,
        name: "Success",
        meta: { requiresAuth: true }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
            if (to.meta.requiresAuth) {
                const token = localStorage.getItem('auth');
                
                if (token) {
                    // 在实际应用中，这里应该发送请求到后端验证token有效性
                    // 这里我们简单模拟验证过程
                    if (checkTokenValid(token)) {
                        next(); // token有效，允许访问
                    } else {
                        // token无效，跳转到登录页
                        next('/');
                    }
                } else {
                    // 没有token，跳转到登录页
                    next('/');
                }
            } else {
                next(); // 不需要验证的路由
            }
        });

createApp(App).
    use(router).use(pinia).mount('#app')

const userStore = useUserStore();
const token = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')).token : null;
if (token && userStore.checkTokenValidity()) {
  router.push({ name: "Success" });
}

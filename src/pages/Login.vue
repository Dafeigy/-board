<script setup>
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { useUserStore } from '../store/userStorage';
const router = useRouter()


const userPassWord = ref("");
const userName = ref("");


const isRememberMe = ref(false);
const userStore = useUserStore();
const isLogin = ref(userStore.isLogin || localStorage.getItem('auth'))
const loginUserInfo = ref(userStore.userInfo);

// console.log(isLogin.value);


if (localStorage.getItem("auth")) {
    var current_token = JSON.parse(localStorage.getItem('auth')).token;
    console.log(JSON.parse(localStorage.getItem('auth')).token);
    checkTokenValid(current_token);
}
// LOGIN AUTH should be rewrite here:
const login = async () => {
    // This is has logined.
    if (isLogin.value) {
        router.replace({path:'/Success'})
        console.log("Already login")
        console.log(isLogin.value);
    }
    // Not has login. Try to login.
    // LOGIN AUTH LOGIC
    if (!isLogin.value) {
        try {
            const response = await axios.post('/api/token', null, {
                params: {
                    "username": userName.value,
                    "password": userPassWord.value
                }
            });
            handleLoginResponse(response.data);
            userStore.setToken(response.data.access_token, isRememberMe.value);
            isLogin.value = true;
            router.push({ name: "Success" });
        } catch (error) {
            console.error('Login failed:', error);
            alert("Wrong username or password");
        }
    }
}

const switchUser = () => {
    isLogin.value = false;
    loginUserInfo.value = null;
    localStorage.removeItem('auth');
    userStore.clearAuth()
}

function handleLoginResponse(response) {
    if (response.access_token) {
        // 保存token到localStorage
        // localStorage.setItem('access_token', response.access_token);
        console.log('Token saved successfully');
    } else {
        console.error('No access token received');
    }
}

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
        isLogin.value = true;
        router.push({ name: "Success" });
    } catch (error) {
        isLogin.value = false;
        router.push({ name: "/" });
        console.error('Auth failed:', error);
        // alert("Wrong username or password");
    }
}

</script>
<template>

    <div id="login"
        class="transition-all aspect-16-9 flex h-[80%] items-center rounded-2xl justify-center shadow-2xl bg-white delay-50 duration-300 ease-in-out">
        <div id="information" class=" w-2/3 h-full flex flex-col rounded-l-2xl items-center justify-center text-grey">
            <div class="bg-gradient-to-r from-blue-500 to-green-500 blur-[70px] w-2/5 h-1/5 relative flex">
            </div>
            <div class="absolute fadein-short transition-opacity duration-300 ease-in-out opacity-0" v-if="isLogin"
                v-show="isLogin">
                <h1 class="text-6xl font-bold opacity-100">Welcome back.</h1>
                <h1 class="text-4xl opacity-100">Ready to explore?</h1>
            </div>
            <div class="absolute fadein-short transition-opacity duration-300 ease-in-out opacity-0" v-if="!isLogin"
                v-show="!isLogin">
                <h1 class="text-6xl font-bold opacity-100">Welcome.</h1>
                <h1 class="text-4xl opacity-100">Sign in to explore NUL4i.</h1>
            </div>
        </div>
        <div id="logins" class="w-1/3  h-full justify-center flex flex-col items-center fadein" v-if="!isLogin">
            <form action="" class="text-xl flex flex-col justify-center h-[30%] text-grey w-[80%]">
                <p class="px-4 text-2xl py-4 text-gray-600">Username:</p>
                <input class="text-xl bg-gray-100 rounded-xl w-full h-1/5  px-5" type="text" v-model="userName"
                    placeholder="Please Enter Username"></input>
                <p class="px-4 text-2xl py-4 text-gray-600">Password:</p>
                <input class="text-xl bg-gray-100 rounded-xl w-full h-1/5  px-5" type="password" name="" id=""
                    @input="updateUser" v-model="userPassWord" placeholder="Please Enter Password" required></input>
                <div id="remember" class="flex px-2 py-3">
                    <input type="checkbox" name="rememberme" id="rememberme" v-model="isRememberMe"
                        @input="updatePassword" required>
                    <p class="mx-2 text-sm text-gray-500">Remember Me</p>
                </div>
            </form>
            <div class="w-[80%] flex items-center justify-center h-[20%] flex-col">
                <button @click="login"
                    class=" h-[35%] shadow-2xl w-full text-white bg-blue-500 shadow-blue-500/50 rounded-2xl text-xl cursor-pointer hover:scale-[98%] transition-all duration-300">SIGN
                    IN</button>
                <p class="py-2">---------------------------or---------------------------</p>
                <div id="othersLogin" class="flex w-full h-[70%] justify-around">
                    <button class="w-[48%] px-2 h-[45%] bg-white border  text-xl text-gray cursor-pointer" @click="checkTokenValid(current_token)">
                        WeChat</button>
                    <button class="w-[48%] px-2 h-[45%] bg-white border  text-xl text-gray" @click="toggle"> QQ</button>
                </div>

            </div>

        </div>

        <div id="logined" class="w-1/3  h-full justify-center flex flex-col items-center" v-if="isLogin">
            <div id="loginElement" class="flex w-[80%]">
                <div id="avatar"
                    class="w-[20%] aspect-square rounded-2xl bg-gradient-to-r from-green-300 to-blue-500 blur-xs shadow-2xl shadow-blue-800">
                </div>
                <div id="loginUserInfo" class="w-[80%] flex flex-col ml-5 justify-center">
                    <p class="text-2xl font-bold">Welcome back,</p>
                    <div class="flex mt-2  ">
                        <p class="text-md">Current User:</p>
                        <p class="text-md ml-2 font-bold">NUL4i</p>
                    </div>
                </div>
            </div>


            <div id="controls" class="flex w-[80%] h-[5%] mt-8">
                <button
                    class="w-5/11 bg-blue-500 text-white text-xl rounded-xl  flex items-center  justify-center cursor-pointer shadow-2xl shadow-blue-500 hover:scale-[105%] duration-300 transition-all"
                    @click="login">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>

                    <p class="pl-4">Sign In</p>
                </button>
                <button
                    class="w-4/11 bg-gray-100 text-gray-600 text-xl ml-5 rounded-xl flex items-center  justify-center cursor-pointer hover:shadow-xl hover:scale-[103%] duration-300 transition-all"
                    @click="switchUser">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>
                    <p class="pl-4">Switch</p>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fadein {
    animation: fadeInAnimation ease 2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.fadein-short {
    animation: fadeInAnimation ease 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 100%;
    }

}
</style>

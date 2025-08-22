<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { useUserStore } from '../store/userStorage';
const router = useRouter()
const login = () => {

    router.push({ name: "Success" })
}

// const isRememberMe = ref(false);
// const userPassWord = ref("");
// const userName = ref("");
import { defineStore } from 'pinia'
const isRememberMe = ref(false);
const userStore = useUserStore();
const userName = ref(userStore.user);
const userPassWord = ref(userStore.password);

const updateUser = () => {
  userStore.user = userName.value;
};

const updatePassword = () => {
  userStore.password = userPassWord.value;
};

</script>
<template>

    <div id="login" class="aspect-16-9 flex h-[80%] items-center rounded-2xl justify-center shadow-2xl bg-white">
        <div id="information" class="w-2/3 h-full flex flex-col rounded-l-2xl items-center justify-center text-grey">
            <div class=" bg-gradient-to-r from-blue-500 to-green-500 blur-[70px] w-2/5 h-1/5 relative flex">
            </div>
            <div class="absolute">
                <h1 class="text-6xl font-bold">Welcome,</h1>
                <h1 class="text-4xl">Sign in to explore NUL4i.</h1>
            </div>
        </div>
        <div id="logins" class="w-1/3  h-full justify-center flex flex-col items-center">

            <form action="" class="text-xl flex flex-col justify-center h-[30%] text-grey w-[80%]">
                <p class="px-4 text-2xl py-4 text-gray-600">Username:</p>
                <input class="text-xl bg-gray-100 rounded-xl w-full h-1/5  px-5" type="text" v-model="userName"
                    placeholder="Please Enter Username"></input>
                <p class="px-4 text-2xl py-4 text-gray-600">Password:</p>
                <input class="text-xl bg-gray-100 rounded-xl w-full h-1/5  px-5" type="password" name="" id="" @input="updateUser"
                    v-model="userPassWord" placeholder="Please Enter Password"></input>
                <div id="remember" class="flex px-2 py-3">
                    <input type="checkbox" name="rememberme" id="rememberme" v-model="isRememberMe" @input="updatePassword">
                    <p class="mx-2 text-sm text-gray-500">Remember Me</p>
                </div>
            </form>
            <div class="w-[80%] flex items-center justify-center h-[20%] flex-col">
                <button @click="login"
                    class=" h-[35%] shadow-2xl w-full text-white bg-indigo-500 shadow-indigo-500/50 rounded-2xl text-xl cursor-pointer">SIGN
                    IN</button>
                <p class="py-2">---------------------------or---------------------------</p>
                <div id="othersLogin" class="flex w-full h-[70%] justify-around">
                    <button class="w-[48%] px-2 h-[45%] bg-white border  text-xl text-gray"> WeChat</button>
                    <button class="w-[48%] px-2 h-[45%] bg-white border  text-xl text-gray"> QQ</button>
                </div>

            </div>

        </div>
    </div>
</template>

<style scoped></style>
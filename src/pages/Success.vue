<script setup>
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const backhome = () => {
    console.log(
        "hello"
    )
    router.push({ name: "/" })
}


</script>
<template>
    <div class="aspect-16-9 text-white h-[80%] items-center justify-center flex shadow-2xl fadein">
        <div id="left" class="flex w-1/10 h-full bg-[#171527] rounded-l-2xl flex-col items-center justify-between">
            <div id="avatar"
                class="aspect-square rounded-full w-3/7 bg-gradient-to-b from-blue-500 to-green-500 mt-[20%] shadow-2xl shadow-blue-400">
            </div>
            <div id="leftpannels" class="flex text-[#3d3c4c] flex-col w-full h-[50%] items-center">
                <div
                    class="hover:border hover:text-white hover:border-[#3b394b] hover:bg-gradient-to-b from-[#262537] to-[#272638] rounded-2xl overviews h-1/8 flex mt-4 justify-center items-center aspect-square cursor-pointer transition-all ease-in-out duration-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </div>
                <div
                    class="overviews h-1/8 flex mt-4 justify-center items-center aspect-square cursor-pointer transition-all ease-in-out duration-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>

                </div>
                <div
                    class="overviews h-1/8 flex mt-4 justify-center items-center aspect-square cursor-pointer transition-all ease-in-out duration-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                    </svg>

                </div>
                <div
                    class="overviews h-1/8 flex mt-4 justify-center items-center aspect-square cursor-pointer transition-all ease-in-out duration-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </div>
                <div
                    class="overviews h-1/8 flex mt-4 justify-center items-center aspect-square cursor-pointer transition-all ease-in-out duration-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>

                </div>
                <div
                    class="overviews h-1/8 flex mt-4 justify-center items-center aspect-square cursor-pointer transition-all ease-in-out duration-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                </div>
            </div>
            <div id="info" class=" w-full h-[15%] items-center flex flex-col text-[#3d3c4c] mb-8">
                <div id="about"
                    class="aspect-square h-5/12 flex mt-2 justify-center items-center rounded-sm cursor-pointer  transition-all ease-in-out duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>

                </div>
                <div id="logout" @click="backhome"
                    class="aspect-square h-5/12 flex mt-2 justify-center items-center rounded-sm cursor-pointer  transition-all ease-in-out duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                    </svg>

                </div>
            </div>
        </div>
        <div id="middle" class="flex w-6/10 h-full bg-[#2e2c3c] justify-center items-center text-8xl">
            <div class="animate-pulse text-indigo-300">
                TODO
            </div>

        </div>
        <div id="right" class="flex w-3/10 h-full bg-[#313041] rounded-r-2xl justify-center items-center flex-col">
            <div id="rtop" class="w-[80%] h-3/20 flex">
                TODO
            </div>
            <div id="rmid" class="w-[80%] h-3/20 flex justify-around items-center">
                <div class="w-1/4 h-[80%] bg-[#373545] rounded-xl flex justify-center items-center">1</div>
                <div class="w-1/4 h-[80%] bg-[#373545] rounded-xl flex justify-center items-center">2</div>
                <div class="w-1/4 h-[80%] bg-[#373545] rounded-xl flex justify-center items-center">3</div>
            </div>
            <div id="rbtm"
                class="w-[80%] h-1/2 mt-10 flex justify-center items-center text-4xl rounded-2xl bg-[#373545]">
                ...
            </div>
        </div>
        <!-- <div class="text-2xl w-[15%] h-[5%] text-theme bg-green text-center rounded-2xl mt-10 flex items-center justify-center">
            <button @click="backhome" class="w-full h-full cursor-pointer"><-Back</button>
        </div> -->
    </div>

</template>

<style scoped>

/* .overviews:hover {
    border-image: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.1)) 1;
    border-style: solid;
    border-width: 2px;
    border-radius: 16rem;
    color: white;
} */

.overviews svg {
    width: 80%;
    height: 40%;
}

.gradienBorder {
    background: rgba(255, 255, 255, 0.1);
    color: aliceblue;

}

.fadein {
    animation: fadeInAnimation ease 0.5s;
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
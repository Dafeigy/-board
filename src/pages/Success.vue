<script setup>
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const backhome = ()=>{
    router.push({name: "/"})
}


</script>
<template>
    <div class="aspect-16-9 flex text-green h-[80%] rounded-2xl text-8xl items-center justify-center flex-col shadow-2xl">
        <h1 class="tracking-[.2em]">LOGIN SUCCESS</h1>
        <div class="text-2xl w-[15%] h-[5%] text-theme bg-green text-center rounded-2xl mt-10 flex items-center justify-center">
            <button @click="backhome" class="w-full h-full cursor-pointer"><-Back</button>
        </div>
    </div>
    
</template>
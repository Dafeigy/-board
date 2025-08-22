import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: '',
    password: ''
  }),
  persist: true
} // 启用持久化存储
)
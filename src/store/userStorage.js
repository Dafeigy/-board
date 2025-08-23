import { defineStore } from 'pinia';

export const useUserStore = defineStore('auth', {
  state: () => ({
    token: null,
    user: null,
    rememberMe: false,
    isLogin: false
  }),
  actions: {
    setToken(token, rememberMe) {
      this.token = token;
      this.rememberMe = rememberMe;

      // 如果不选择"记住我"，则设置会话级存储
      if (!rememberMe) {
        sessionStorage.setItem('tempToken', token);
      } else {
        localStorage.setItem('auth', JSON.stringify({ token, rememberMe }));
      }
    },
    setUser(user) {
      this.user = user;
    },
    clearAuth() {
      this.token = null;
      this.user = null;
      this.rememberMe = false;
      this.isLogin = false;
      sessionStorage.removeItem('tempToken');
      localStorage.removeItem('auth');
      localStorage.removeItem('isLogin');
    },
    // 检查token是否有效（模拟）
    checkTokenValidity() {
      if (!this.token) return false;

      // 在实际应用中，这里应该解析JWT或向服务器验证
      // 这里简单模拟token有效期为1小时
      const tokenAge = Date.now() - (this.token.createdAt || 0);
      return tokenAge < 3600000; // 1小时
    }
  },
  // persist: true
}, // 启用持久化存储


)

import { createRouter, createWebHistory } from 'vue-router'
// 导入刚才编写的组件
import Register from '../components/Register'
import Login from '../components/Login'
import UserInfo from "../components/UserInfo";
import UserProfile from "../components/Student/UserInfo/UserProfile";
import UserAvatar from "../components/Student/UserInfo/UserAvatar";
import UserPasswordSetting from "../components/Student/UserInfo/UserPasswordSetting";

import Student from "../views/Student";

const routes = [
    // 下面都是固定的写法
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: '',
      redirect: '/login',
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/student',
      name: 'Student',
      component: Student
      // home页面并不需要被访问
    },
    {
      path: '/userInfo',
      name: 'UserInfo',
      component: UserInfo,
      redirect:'/userPasswordSetting',
      children: [
        {
          path: '/userAvatar',
          name: 'UserAvatar',
          component: UserAvatar,
        },
        {
          path: '/userProfile',
          name: 'UserProfile',
          component: UserProfile,
        },
        {
          path: '/userPasswordSetting',
          name: 'UserPasswordSetting',
          component: UserPasswordSetting,
        },

      ]
    },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

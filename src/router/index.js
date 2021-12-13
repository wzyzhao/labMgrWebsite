import { createRouter, createWebHistory } from 'vue-router'
// 导入刚才编写的组件
import Register from '../components/Register'
import Login from '../components/Login'
import Student from "../views/Student";
import UserInformation from "@/views/UserInformation";
import Teacher from "@/views/Teacher";
import CCTeacher from "@/views/CCTeacher";
import Assistant from "@/views/Assistant";
import ReportOne from '../components/Student/ReportOne'
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
    },
    {
        path: '/teacher',
        name: 'Teacher',
        component: Teacher
    },
    {
        path: '/ccTeacher',
        name: 'CCTeacher',
        component: CCTeacher
    },
    {
        path: '/assistant',
        name: 'Assistant',
        component: Assistant
    },
    {
      path: '/userInformation',
      name: 'UserInformation',
      component: UserInformation
    },
    {
        path: '/reportOne',
        name: 'reportOne',
        component: ReportOne
    },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

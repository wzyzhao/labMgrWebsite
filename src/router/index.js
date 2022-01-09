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
import ClazzOne from '../components/Clazz/ClazzOne'
import ExperimentList from "@/components/Student/ExperimentList";
import ReleaseNotice from "@/components/CCTeacher/ReleaseNotice";
import PDF from "@/components/PDF";
const routes = [
    // 下面都是固定的写法
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
        path: '/pdf',
        name: 'PDF',
        component: PDF
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
      component: Student,
    },
    {
        path: '/teacher',
        name: 'Teacher',
        component: Teacher,
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
    {
        path: '/clazzOne',
        name: 'ClazzOne',
        component: ClazzOne,
    },
    {
        path: '/experimentList',
        name: 'ExperimentList',
        component: ExperimentList,
    },
    {
        path: '/releaseNotice',
        name: 'ReleaseNotice',
        component: ReleaseNotice,
    },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

/*
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next();
    } else {
        let token = localStorage.getItem('Authorization');

        if (token === null || token === '') {
            next('/login');
        } else {
            next();
        }
    }
});*/

export default router

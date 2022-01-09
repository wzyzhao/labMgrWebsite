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
import PDF from "@/components/PDF";
import Admin from "@/views/Admin";
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
        component: PDF,
        meta: {
            requireAuth: true
        }
    },
    {
      path: '/',
      name: '',
      redirect: '/login',
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
        meta: {
            requireAuth: true
        }
    },
    {
      path: '/student',
      name: 'Student',
      component: Student,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/teacher',
        name: 'Teacher',
        component: Teacher,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/ccTeacher',
        name: 'CCTeacher',
        component: CCTeacher,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/assistant',
        name: 'Assistant',
        component: Assistant,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        meta: {
            requireAuth: true
        }
    },
    {
      path: '/userInformation',
      name: 'UserInformation',
      component: UserInformation,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/reportOne',
        name: 'reportOne',
        component: ReportOne,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/clazzOne',
        name: 'ClazzOne',
        component: ClazzOne,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/experimentList',
        name: 'ExperimentList',
        component: ExperimentList,
        meta: {
            requireAuth: true
        }
    }
  ]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


/*// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
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
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
        if (sessionStorage.getItem("token") == 'true') { // 判断本地是否存在token
            next()
        } else {
            // 未登录,跳转到登陆页面
            next({
                path: '/login'
            })
        }
    } else {
            next();
        }

})

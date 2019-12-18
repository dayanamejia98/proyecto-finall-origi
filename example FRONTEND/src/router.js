import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Registro'
import login from './components/login'
import User from './components/User'
import Niveles from './components/Niveles'
import Nivel1 from './components/Nivel1'
import Nivel2 from './components/Nivel2'
import Nivel3 from './components/Nivel3'
import cursos from './components/cursos'
import colores from './components/colores'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base:process.env.BASE_URL,
    routes: [
        {
            path: '/registro',
            name:'home',
            component: Home
        },
        {
            path: '/',
            name:'login',
            component:login
        },
        {
            path: '/profile',
            name:'profile',
            component: User
        },
        {
            path: '/niveles',
            name:'niveles',
            component: Niveles
        },
        {
            path: '/Nivel1',
            name:'Nivel1',
            component: Nivel1
        },
        {
            path: '/Nivel2',
            name:'Nivel2',
            component: Nivel2
        },
        {
            path: '/Nivel3',
            name:'Nivel3',
            component: Nivel3
        },
        {
            path: '/cursos',
            name:'cursos',
            component: cursos
        },
        {
            path: '/colores',
            name:'colores',
            component: colores
        }





    ]
})
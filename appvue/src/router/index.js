import { createRouter, createWebHistory} from "vue-router";
// import Vue from 'vue'
// import VueRouter from 'vue-router'
import IncluirReg from '../views/IncluirReg.vue'
import ListarReg from '../views/ListarReg.vue'
import AlterarReg from '../views/AlterarReg.vue'
import MeuComponente2 from '../views/MeuComponente2.vue'
// Vue.use(VueRouter)

const routes = [
    {
        path: '/incluirReg',
        name: 'incluirReg',
        component: IncluirReg
    },
    {
        path: '/listarReg',
        name: 'listarReg',
        component: ListarReg
    },
    {
        path: '/alterarReg/:id',
        name: 'alterarReg',
        component: AlterarReg
    },
    {
        path: '/excluirReg/:id',
        name: 'excluirReg',
        component: MeuComponente2
    }
]

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    base: 'http://localhost:8080',
    routes
})
export default router
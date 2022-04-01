import { createApp } from 'vue'
import { createStore} from 'vuex'
import App from './App.vue'
import router from './router'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);

const dados = createStore({
    state:{
        ultimoId: 0,
        flagInclui: false,
        flagAltera: false,
        flagExclui: false,
        itensAcessorios: [],
        itemAcessorio: null
    },
    getters:{
        itensAcessorios: (state) => state.itensAcessorios,
        itemAcessorio: (state) => state.itemAcessorio,
        flagInclui: (state) => {return state.flagInclui},
        flagAltera: (state) => {return state.flagAltera},
        flagExclui: (state) => {return state.flagExclui},
        ultimoId: (state) => {return state.ultimoId},
    },
    mutations:{
        incluirAcessorio: (state, acessorio) => {
            state.itensAcessorios.push(acessorio)
        },
        alterarAcessorio: (state, acessorio) => {
            const index = state.itensAcessorios.findIndex(l => l.id === acessorio.id);
            state.itensAcessorios.splice(index, 1, acessorio);
        },
        excluirAcessorio: (state, id) => {
            state.itensAcessorios.splice(id, 1);
        },
        buscarAcessorio: (state, id) => {
            console.log("buscar acessorio"+state.itensAcessorios[id])
            // const index = state.itensAcessorios.findIndex(l => l.id === id);
            state.itemAcessorio = state.itensAcessorios[id];
        },
        incrementarId: (state) => {
            state.ultimoId++
        },
        setFlagInclui: (state, flag) => {
            return state.flagInclui = flag
        },
        setFlagAltera: (state, flag) => {
            return state.flagAltera = flag
        },
    },
    actions:{
        async incluirAcessorio(context, acessorio){
            context.commit('incluirAcessorio', acessorio);
        },
        async alterarAcessorio(context, acessorio){
            context.commit('alterarAcessorio', acessorio);
        },
        async excluirAcessorio(context, id){
            context.commit('excluirAcessorio', id);
        },
        async buscarAcessorio(context, id){
            context.commit('buscarAcessorio', id);
        },
        async setFlagInclui(context, flag){
            context.commit('setFlagInclui', flag);
        },
        async incrementarId(context){
            context.commit("incrementarId");
        },
    },
})


app.use(router);
app.use(dados);

app.mount("#app");

// props: {
//     acessorios: [
//       {
//         id: { type: Number, require: true },
//         tipo: { type: String, require: true },
//         nome: { type: String, require: true },
//         descricao: { type: String, require: false },
//         qtd: { type: Number, require: true },
//         dataInclusao: { type: Date, require: true },
//       },
//     ],
//   },



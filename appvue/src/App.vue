<template>
  <div id="app">
    <h1>Loja de artesanato</h1>
    <h2>Cadastro de acessórios</h2>
    <br />
    <router-link to="/incluirReg">Incluir acessório | </router-link>
    <router-link to="/listarReg">Listar acessórios</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters(["flagInclui", "flagAltera", "flagExclui", "itensAcessorios"]),
  },
  methods: {
    ...mapActions(["setFlagInclui"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

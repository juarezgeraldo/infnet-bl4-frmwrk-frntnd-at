<template>
  <div>
    <h3>Quantidade de acessórios cadastrados: {{ itensAcessorios.length }}</h3>
    <br /><br />
    <table class="table" align="center" border="2">
      <thead>
        <tr>
          <th>Id</th>
          <th>Tipo</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Qtd</th>
          <th>Data inclusão</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in itensAcessorios" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.tipo }}</td>
          <td>{{ item.nome }}</td>
          <td class="itemdesc">{{ item.descricao }}</td>
          <td>{{ item.qtd }}</td>
          <td>{{ item.dataInclusao }}</td>
          <td>
            <!-- <router-link to="/alterarReg/1">Alterar</router-link> | -->
            <a href="#" @click="alterarReg(item.id)">Alterar</a> |
            <a href="#" @click="excluirAcessorio(item.id)">Excluir</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters(["itensAcessorios"]),
  },
  methods: {
        ...mapActions(["excluirAcessorio"]),
    alterarReg(item) {
      this.$router.push({
        name: "alterarReg",
        params: { id: item },
      });
    },
  },
};
</script>

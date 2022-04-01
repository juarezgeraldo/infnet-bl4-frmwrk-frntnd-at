<template>
  <div class="m-4">
    <div class="form">
      <div v-if="!registroAlterado">
        <h2>Alteração</h2>
        <strong>Id: </strong>
        <input type="number" disabled v-model="itemAcessorio.id" /><br /><br />
        <strong>Nome: </strong>
        <input type="text" v-model="itemAcessorio.nome" /><br /><br />
        <strong>Descrição: </strong>
        <textarea
          type="text"
          rows="5"
          cols="30"
          maxlength="150"
          v-model="itemAcessorio.descricao"
        /><br /><br />
        <label>
          <strong>Tipo: </strong>
          <select v-model="itemAcessorio.tipo">
            <option value="Brinco">Brinco</option>
            <option value="Pulseira">Pulseira</option>
            <option value="Colar">Colar</option>
          </select> </label
        ><br /><br />
        <label>
          <strong>Quantidade: </strong>
          <input type="number" v-model="itemAcessorio.qtd" /> </label
        ><br /><br />
        <label>
          <strong>Data: </strong>
          <input type="date" v-model="itemAcessorio.dataInclusao" />
        </label>
        <br /><br />
        <button @click="alterarRegistro">Alterar Item</button><span> . </span>
        <!-- <br><br> -->
        <button>Cancelar</button>
        <div v-if="flagErro">
          <br />
          <div class="alert alert-danger">*** {{ mensagemErro }} ***</div>
        </div>
      </div>
      <div v-else>
        <div>
          <h3>Acessório alterado!</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "alterarRegistro",
  data() {
    return {
      registroAlterado: false,
      mensagemErro: null,
      flagErro: false,
    };
  },
  created() {
    this.registroAlterado = false;
    this.buscarAcessorio(this.$route.params.id);
  },
  computed: {
    ...mapGetters(["flagAltera", "itemAcessorio"]),
  },
  methods: {
    ...mapActions(["alterarAcessorio", "setFlagAltera", "buscarAcessorio"]),
    alterarRegistro() {
      if (this.criticarCampos()) {
        this.alterarAcessorio(this.itemAcessorio);
        this.registroAlterado = true;
        this.flagErro = false;
      } else {
        this.mensagemErro = "Todos os campos devem ser preenchidos...";
        this.flagErro = true;
      }
    },
    criticarCampos() {
      return (
        this.itemAcessorio.nome &&
        this.itemAcessorio.tipo &&
        this.itemAcessorio.descricao &&
        this.itemAcessorio.dataInclusao
      );
    },

    // buscarAcessorio() {
    //   console.log("dentro do buscar");
    //   console.log(this.$route.params.id);
    //   console.log(this.buscarAcessorio(this.$route.params.id));
    //   this.buscarAcessorio(this.$route.params.id);
    //   console.log(this.acessorio);
    // },
  },
};
</script>

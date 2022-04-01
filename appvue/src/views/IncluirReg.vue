<template>
  <div class="m-4">
    <div class="form">
      <div v-if="!registroIncluido">
        <h2>Inclusão</h2>
        <strong>Id: </strong>
        <input
          type="number"
          disabled
          v-bind="(acessorio.id = ultimoId)"
          v-model="acessorio.id"
        /><br /><br />
        <strong>Nome: </strong>
        <input type="text" v-model="acessorio.nome" /><br /><br />
        <strong>Descrição: </strong>
        <textarea
          type="text"
          rows="5"
          cols="30"
          maxlength="150"
          v-model="acessorio.descricao"
        /><br /><br />
        <label>
          <strong>Tipo: </strong>
          <select v-model="acessorio.tipo">
            <option value="Brinco">Brinco</option>
            <option value="Pulseira">Pulseira</option>
            <option value="Colar">Colar</option>
          </select> </label
        ><br /><br />
        <label>
          <strong>Quantidade: </strong>
          <input type="number" v-model="acessorio.qtd" /> </label
        ><br /><br />
        <label>
          <strong>Data: </strong>
          <input type="date" v-model="acessorio.dataInclusao" />
        </label>
        <br /><br />
        <button :disabled="acessorio.nome.length < 3" @click="incluirRegistro">
          Incluir Item</button
        ><span> . </span>
        <!-- <br><br> -->
        <button>Cancelar</button>
        <div v-if="flagErro">
          <br>
          <div class="alert alert-danger">
            *** {{ mensagemErro }} ***
          </div>
        </div>
      </div>
      <div v-else>
        <div>
          <h3>Acessório incluído!</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "incluirRegistro",
  data() {
    return {
      registroIncluido: false,
      mensagemErro: "",
      flagErro: false,
      acessorio: {
        id: null,
        tipo: "",
        nome: "",
        descricao: "",
        qtd: 0,
        dataInclusao: "",
      },
    };
  },
  computed: {
    ...mapGetters(["flagInclui", "ultimoId"]),
  },
  methods: {
    ...mapActions(["incluirAcessorio", "setFlagInclui", "incrementarId"]),
    incluirRegistro() {
      if (this.criticarCampos()) {
        let dados = {
          id: this.ultimoId,
          tipo: this.acessorio.tipo,
          nome: this.acessorio.nome,
          descricao: this.acessorio.descricao,
          qtd: this.acessorio.qtd,
          dataInclusao: this.acessorio.dataInclusao,
        };
        this.incluirAcessorio(dados);
        this.incrementarId();
        this.registroIncluido = true;
        this.flagErro = false;
      } else {
        this.mensagemErro = "Todos os campos devem ser preenchidos...";
        this.flagErro = true;
      }
    },
    criticarCampos() {
      return (
        this.acessorio.nome &&
        this.acessorio.tipo &&
        this.acessorio.descricao &&
        this.acessorio.dataInclusao
      );
    },
  },
};
</script>

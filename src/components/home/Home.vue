<template>
  <div id="app">
    <div class="corpo">
      <h1 class="centralizado">{{ titulo }}</h1>
      
      <input type="search" class="form-control" placeholder="busca" @input="filtro = $event.target.value">
      <ul class="lista-fotos">  
        <li class="lista-fotos-item" v-for="foto of fotosComFiltro" v-bind:key="foto.titulo"> 
          <meu-painel :titulo="foto.titulo">
            <imagem-responsiva :src="foto.url" :alt="foto.titulo"></imagem-responsiva>
          </meu-painel>
        </li> 
      </ul>

    </div>
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue'
import Imagemresponsiva from '../shared/imagem-responsiva/Imagemresponsiva.vue'

export default {
  name: 'app',

  components: {
    "meu-painel" : Painel,
    "imagem-responsiva" : Imagemresponsiva
  },

  data() {
      return {
          titulo: 'Alura Pic',
          fotos: [],
          filtro: ''
      }
  },
  
  created(){
      this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, erro => console.log(erro));
  },
  computed: {
        fotosComFiltro(){
          if(this.filtro){
              let exp = new RegExp(this.filtro.trim(),'i');
              return this.fotos.filter(foto => exp.test(foto.titulo));
          } else {
              return this.fotos;
          }
      }
  }
  
}
</script>

<style>
.corpo {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  width: 96%;
}
.lista-fotos {
  list-style: none;
}
.form-control {
  width: 100%
}
.lista-fotos {
  list-style: none;
}
.lista-fotos .lista-fotos-item {
  display: inline-block;
}
</style>

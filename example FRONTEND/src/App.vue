<template>
  <v-app>

    <v-app-bar app color="#0032C8" flat class="grenn lighten">
      <v-btn icon to="/">
        <v-icon color="white">mdi-home</v-icon>
      </v-btn>
      <v-layout row wrap justify-center>
        <v-toolbar-title class="headline text-uppercase white--text">
          <img id="logo" :src="require('./imagen/icono.png')" alt="">
          <span class="font-weight-light titulo">EDUCASEÑA</span>
        </v-toolbar-title>
        <v-row justify="center">
      
    </v-row>

      </v-layout>
      <span v-if="user != null" class="white--text font-weight-bold text-uppercase">{{user}}</span>
      <v-btn v-if="user != null" color="white" class="ml-4" outlined small @click="desconectar">Desconectar <span
          class="ml-2" style="width: 10px; height: 10px; background-color: red; border-radius: 50%;"></span></v-btn>
    </v-app-bar>
    <v-container fluid fill-height>
      <router-view id="contenedor" @userinput="setUsuario($event)"></router-view>
    </v-container>
    <v-footer app absolute class="font-weight-medium"
       color="primary" id="footer">
        <v-row justify="center">
          <span class="white--text subheading">
            &copy; 2019 | <strong>EDUCASEÑA.</strong>
          </span>
        </v-row>
      </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data: () => ({
      snackbar: false,
      text: "",
      user: null
    }),
    methods: {
      setUsuario(event) {
        var data = event;
        console.log(data)
        this.user = data;
      },
      desconectar(ev) {
        this.user = null;
        localStorage.removeItem('usuario');
        this.$router.replace('/')
      }
    },
  };
</script>

<style>
  .titulo {
    font-family: Comic Sans MS, Arial, MS Sans Serif;

  }

  #contenedor {
    position: absolute;
    left: -2vw;
    min-width: 100vw;
    max-width: 100vw;
    top: 10vh;
    background-image: url('./imagen/2.png');
    background-size: 100%;
    background-repeat: repeat-y;
    /* background-attachment: fixed; */
  }

  #logo {
    width: 50px;
    height: auto;
    margin-right: 10px;
  }

  #salir {
    position: absolute;
    left: 200px;
    right: 330;
    width: 90px;
    height: auto;
    margin-right: 10px;
  }
  #footer {
    position:absolute;
    bottom:0vh
  }

</style>
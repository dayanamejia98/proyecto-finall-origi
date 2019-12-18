<template>
  <v-layout row wrap justify-center align-center style="height: 100%">
    <v-card width="300">
      <v-card-title primary-title>
        REGISTRA TU CUENTA
      </v-card-title>
      <v-card-text>
        <v-text-field label="Nombre" v-model="nombre"></v-text-field>
        <v-text-field label="Apellido" v-model="apellido"></v-text-field>
        <v-text-field label="Correo" v-model="correo"></v-text-field>
        <v-text-field label="Contraseña" type="password" v-model="contrasena"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="success" @click="registro()">REGISTARME</v-btn>
        <v-btn color="blue" to="/" dark>Loguear</v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>


<script>
import axios from 'axios';
import store from '../store';
import {mapGetters} from 'vuex';

export default {
  data() {
    return {
      nombre: '',
      apellido: '',
      correo: '',
      contrasena: ''
    }
  },
  methods: {
    registro() {
      axios.post('http://localhost:5000/registro', {
        nombre1: this.nombre,
        apellido1: this.apellido,
        correo: this.correo,
        contrasena: this.contrasena
      })
      .then((response) => {
        var nombre = response.data.nombre1
        alert('Bienvenido ' + nombre);
      })
    }
  },
}
</script>
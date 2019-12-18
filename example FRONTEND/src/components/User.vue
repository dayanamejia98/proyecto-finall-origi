<template>
 <v-layout row wrap justify-center>
     <h1>BIENVENIDO A EDUCASEÑA </h1>
     Hola{{getUser.nombre1}}.

 </v-layout>
 </template>
 
 <<script>
 import  {
     mapGetters
 } from "vuex"
 export default {
     data(){
         return{

         }
     },
     computed: {
         ...mapGetters(["getUser"])
     }
     
 }
 </script>
  
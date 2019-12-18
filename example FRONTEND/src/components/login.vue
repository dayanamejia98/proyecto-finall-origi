<template>
<v-layout id="fondo" >
    <v-layout id="container" row wrap justify-center align-center>
        <v-card color="#1565C" width="300">
        <v-card-title primary-title>
        <h2 class="title">Login</h2> 
        </v-card-title>
         <v-card-text>
          <v-text-field
          label="Username"
          v-model="nombre"
          ></v-text-field>
          <v-text-field
          label="Password"
        type="Password"
        v-model="contrasena"
          ></v-text-field>
          </v-card-text> 
          <v-card-actions>
              <v-layout row wrap justify-center>
                  <v-btn color="success" @click="login()">Login</v-btn>       
                  <v-btn color="blue" dark to="/registro">Registrarme</v-btn>   
            </v-layout>    
          </v-card-actions>     
        </v-card>    
    </v-layout>
    <v-snackbar
     v-model="snack"
     top
     color="success"
 >
     {{snackText}}
     <v-btn text color="primary" @click.native="snack = false">Close</v-btn>
 </v-snackbar>
    </v-layout>
</template>

<script>
import axios from 'axios'; 
import store from '../store';
import {mapGetters} from 'vuex';

export default {
    data(){
        return {
            nombre: '',
            contrasena: '',
            snack: false,
            snackText: ''
            
        }
    },
    methods: {
        login(event) {
            axios.post('http://localhost:5000/login',{
            nombre: this.nombre,
            contrasena: this.contrasena
            }).then(response =>{
                // console.log(response.data);
                
                if(response.data) {
                    this.snackText = "BIENVENIDO A EDUCASEÑA"
                    this.snack = true
                    var user = response.data;
                    this.$emit('userinput', user.nombre1);
                    localStorage.setItem("usuario", JSON.stringify(user));
                    store.commit("login", user)
                    setTimeout(() => {
                        this.$router.push('/niveles')
                    }, 2500);
                } else if(response.data.nombre1 == null){
                    alert('usuario no ingresado.')
                }
            })

        }
    },
}
</script>

<style scoped>
    #container {
        min-height: 100vh;
    }
    
</style>

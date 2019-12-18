<template>
    <v-layout row wrap justify-center align-center>
        <v-layout row wrap justify-center>
            <h1>INTRODUCCIÓN AL CURSO</h1>
            <h3 id ="texto2"> DESCRIPCIÓN</h3>
            <p id="texto"> 
Cada vez está más extendida la práctica del lenguaje de signos. Hoy en día, no es raro encontrar a personas que sean capaces de hablar en este lenguaje. Además, contar con esta habilidad es de gran importancia para quienes trabajan en organismos o entidades de ayuda social, ONG'S, fundaciones; o ámbitos que tienen cierta vinculación con proyectos o instituciones de inclusión educativa, laboral o social</p>
            <p id="texto3">Para la realización del nivel 1, no es necesario disponer de conocimientos previos, puesto que el nivel comienza desde el principio. Pero para la realización del nivel 2, es recomendable haber realizado el primer nivel, puesto que se parte de conocimientos más avanzados y requiere que el alumno pueda manejarse en este lenguaje</p>
            <h3 id ="texto4"> ¿A QUIEN VA DIRIGIDO?</h3>
            <p id="texto5">Dirigido a cualquier persona interesada en aprender lenguaje de signos, así como a profesionales y estudiantes de diferentes ámbitos: Educativo, Laboral, Administrativo, Psicología, Pedagogía, Trabajo Social, etc</p>
            <h3 id= "texto6">El Nivel 1, de 40 horas.</h3>
           <h3 id= "texto7">El Nivel 2, de 80 horas.</h3>
           <h3 id= "texto8">El Nivel 3, de 100 horas</h3>
        </v-layout>
        <v-container grid-list-xs>
            <v-layout row wrap justify-center>
                <v-card class="ma-4" width="300" height="198" v-for="(nivel, index) in niveles" :key="index" :color="nivel.color" :to="nivel.ruta">
                    <v-card-title primary-title>
                        <v-layout row wrap justify-center align-center style="height: 170px">
                            <h2 class="text-uppercase white--text">{{nivel.nivel}}</h2>
                        </v-layout>
                    </v-card-title>
                </v-card>
            </v-layout>
        </v-container>
    </v-layout>
</template>

<script>
export default {
    data() {
        return {
            niveles: [
                {
                    nivel: 'Nivel 1',
                    color: 'amber',
                    ruta: '/nivel1'
                },
                {
                    nivel: 'Nivel 2',
                    color: 'red',
                    ruta: '/nivel2'
                },
                {
                    nivel: 'Nivel 3',
                    color: 'blue',
                    ruta: '/nivel3'
                },
            ]
        }
    },
}
</script>

<style scoped>
    #texto {
        padding: 0px 15%;
    }
    #texto2{
        width: 72%;
    }
    #texto3{
        padding: 0px 15%;
    }
    #texto4{
        width: 71%;
    }
    #texto5{
        padding: 0px 15%;
    }
      #texto6{
        width: 72%;
          }
          #texto7{
        width: 72%;
          }
          #texto8{
        width: 72%;
          }
</style>
<template>
    <v-container fluid fill-height id="main">
        <v-layout row wrap justify-center align-center>
            <v-col cols="12">
                <v-layout row wrap justify-center>
                    <v-btn rounded dark x-large color="purple" @click="getCourses">Mostrar Cursos</v-btn>
                </v-layout>
            </v-col>
            <v-col cols="12">
                <v-layout justify-center>

                    <v-card width="300" height="230">
                        <v-card-text class="pa-4">
                            <v-text-field v-model="nombre" label="Nombre"></v-text-field>
                            <v-text-field v-model="plan_clase" label="Plan de clase"></v-text-field>
                        </v-card-text>
                        <v-layout row wrap justify-center>
                            <v-btn rounded color="yellow" @click="createCourse">Crear Curso</v-btn>
                        </v-layout>
                    </v-card>
                </v-layout>
            </v-col>
            <v-col cols="12">
                <v-layout row wrap justify-center>
                    <v-card v-if="cursos.length > 0">
                        <v-card-text>
                            <table class="table">
                                <tr>
                                    <td><span class="font-weight-bold black--text ">Nombre de Curso</span></td>
                                    <td><span class="font-weight-bold black--text ml-3">Plan de Clase</span></td>
                                    <td><span class="font-weight-bold black--text ml-4">Acción</span></td>
                                </tr>
                                <tr v-for="(curso, index) in cursos" :key="index">
                                    <td>{{curso.nombre}}</td>
                                    <td><span class="ml-3">{{curso.plan_clases}}</span></td>
                                    <td>
                                        <v-btn class="ml-3" rounded dark small color="red darken-2" @click="deleteCourse(curso._id)">Borrar</v-btn>
                                    </td>
                                </tr>
                            </table>
                        </v-card-text>
                    </v-card>
                </v-layout>
            </v-col>
        </v-layout>
    </v-container>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                nombre: '',
                plan_clase: '',
                cursos: []
            }
        },
        methods: {
            getCourses() {
                axios.get('http://localhost:5000/cursos')
                    .then((res) => {
                        this.cursos = res.data
                    })
            },
            createCourse() {
                axios.post('http://localhost:5000/curso', {
                        nombre: this.nombre,
                        plan_clases: this.plan_clase
                    })
                    .then((res) => {
                        console.log(res.data)
                        this.getCourses()
                    })
            },
            deleteCourse(id) {
                axios.delete('http://localhost:5000/curso/' + id)
                    .then((res) => {
                        console.log(res.data)
                        this.getCourses()
                    })
            }
        },
    }
</script>

<style scoped>
    #main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 95vh;
    }
</style>
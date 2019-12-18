<template>
  <v-layout row wrap justify-center align-center>
    <v-layout row wrap justify-center>
      <h1 id="texto1">NIVEL 1</h1>
      <h3 id="texto2"> PLAN ESTUDIO</h3>
      <p id="texto3">Para la realización del nivel 1, no es necesario disponer de conocimientos previos, puesto que el
        nivel comienza desde el principio. Pero para la realización del nivel 2, es recomendable haber realizado el
        primer nivel, puesto que se parte de conocimientos más avanzados y requiere que el alumno pueda manejarse en
        este lenguaje.</p>
      <h3 id="texto4"> ¿A QUIEN VA DIRIGIDO?</h3>
      <p id="texto5">Dirigido a cualquier persona interesada en aprender lenguaje de signos, así como a profesionales y
        estudiantes de diferentes ámbitos: Educativo, Laboral, Administrativo, Psicología, Pedagogía, Trabajo Social,
        etc.</p>
      <h3 id="texto6">El Nivel 1, de 40 horas.</h3>
      <h3 id="texto7">El Nivel 2, de 80 horas.</h3>
      <h3 id="texto8">El Nivel 3, de 100 horas</h3>
      <h3 id="texto9">Módulo 1:</h3>
      <p id="texto10"> - El Alfabeto Dactológico.</p>
      <p id="texto11"> - Los números (I).</p>
      <p id="texto12"> - Formas de llamar a una persona sorda.</p>
      <p id="texto13"> - Comparación entre lenguaje oral y Lengua de Signos Española.</p>
      <p id="texto14"> - Temas: Expresiones coloquiales, Presentación, La familia, Adjetivos (I).</p>
      <h3 id="texto15">Módulo 2: </h3>
      <p id="texto16"> - <router-link to="/colores" style="color: black; text-decoration: none">Los colores.</router-link></p>
      <p id="texto17"> - Adverbios (I)..</p>
      <v-btn color="success" x-large id="to-cursos" to="/cursos">IR A CURSOS</v-btn>
    </v-layout>

  </v-layout>
</template>

<style scoped>
  #to-cursos {
    position: absolute;
    bottom: 5vh;
    right: 5vw;
  }
  #texto1 {
    padding: 0px 15%;
    width: 100%;
  }

  #texto2 {
    width: 72%;
  }

  #texto3 {
    padding: 0px 15%;
  }

  #texto4 {
    width: 71%;
  }

  #texto5 {
    padding: 0px 15%;
  }

  #texto6 {
    width: 72%;
  }

  #texto7 {
    width: 72%;
  }

  #texto8 {
    width: 72%;
  }

  #texto9 {
    width: 72%;
  }

  #texto10 {
    width: 72%;
  }

  #texto11 {
    width: 72%;
  }

  #texto12 {
    width: 72%;
  }

  #texto13 {
    width: 72%;
  }

  #texto14 {
    width: 72%;
  }

  #texto15 {
    width: 72%;
  }

  #texto16 {
    width: 72%;
  }

  #texto17 {
    width: 72%;
  }
</style>
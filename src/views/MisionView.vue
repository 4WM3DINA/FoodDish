<template>
  <!-- Misión -->
  <div>
    <v-alert color="#2A3B4D" dark dense>
      <h1 class="text-center text-h3 text-center font-weight-black">Misión</h1>
    </v-alert>
    <v-alert color="#C51162" dark icon="mdi-crown" border="left" prominent class="text-center">
      “Satisfacer las necesidades gastronómicas de nuestros clientes, ofreciendo alimentos y servicios 
      con la más alta calidad, donde se sobrepasen las expectativas de nuestros clientes y ser un espacio de trabajo que permita la realización personal y el Desarrollo de sus colaboradores en el grupo.
      <br/>
      Tomando como estrategia principal el mejoramiento continúo de los estrictos estándares de higiene y buen servicio en un ambiente seguro, agradable y familiar a un precio justo.”
    </v-alert>
    <div class="d-flex flex-column justify-space-between align-center">
      <v-img
        :aspect-ratio="16 / 9"
        :width="width"
        src="https://img.freepik.com/free-photo/top-view-arrangement-with-food-wooden-background_23-2148308806.jpg?t=st=1657380533~exp=1657381133~hmac=fc9552e8984641f42f1a81962c896dac5ce0206be1d6dad7288337f25a605433&w=996"
      ></v-img>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      width: 600,
    }),
  }
</script>
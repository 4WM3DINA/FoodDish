<template>
  <div>
    <v-alert color="#2A3B4D" dark dense>
      <h1 class="text-center text-h3 text-center font-weight-black">Misión</h1>
    </v-alert>
    <v-alert color="#C51162" dark icon="mdi-crown" border="left" prominent>
      Somos profesionales comprometidos en brindar calidad y servicio a nuestros
      clientes. Ofreciendo alimentos de calidad, variedad y cómodos precios, a
      través de un excelente servicio.
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
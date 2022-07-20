<template>
  <!-- Visión -->
  <div>
    <v-alert color="#2A3B4D" dark dense>
      <h1 class="text-center text-h3 text-center font-weight-black">Visión</h1>
    </v-alert>
    <v-alert color="#C51" dark icon="mdi-star-shooting-outline" border="left" prominent class="text-center">
      “Duplicar el valor de la compañía ampliando el liderazgo en cada uno de los mercados.
      <br/>
      Siendo el Mejor Restaurante a nivel Regional y nacional" Ser reconocido y preferido a nivel Regional y Nacional, como un grupo de trabajo original, sólido y profesional.”
    </v-alert>
    <div class="d-flex flex-column justify-space-between align-center">
      <v-img
        :aspect-ratio="16 / 9"
        :width="width"
        src="https://img.freepik.com/free-photo/grilled-chicken-legs-flaming-grill-with-grilled-vegetables-with-tomatoes-potatoes-pepper-seeds-salt_1150-37782.jpg?t=st=1657380711~exp=1657381311~hmac=8895aea62ad6b0b09ce55398637d03203e5bfd46bd78157cd58dd4690dd2177b&w=996"
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
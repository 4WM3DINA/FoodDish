<template>
  <!-- Vista Principal -->
  <v-container>
    <HelloWorld msg="Bienvenidos!" />
    <v-row>
      <v-carousel :show-arrows="false">
        <v-col cols="12">
           <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
        </v-col>
      </v-carousel>
      <StepperView />
      <v-container>
        <h1 class="text-center font-weight-black display-3 white--text mx-auto">
          HAZTE SOCIO
        </h1>
        <v-hover v-slot="{ hover }">
          <v-card class="mx-auto" color="grey lighten-4" max-width="800">
            <v-img
              :aspect-ratio="16 / 9"
              src="https://camo.envatousercontent.com/8cff213ad4c1342e2fe2259a47f6d13f28a9d3b4/68747470733a2f2f692e696d6775722e636f6d2f6f6d70526568372e676966"
              height="300px"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text"
                  style="height: 100%"
                ></div>
              </v-expand-transition>
            </v-img>
            <v-card-text class="pt-6" style="position: relative">
              <v-btn
                to="/register"
                absolute
                color="orange"
                class="white--text"
                fab
                large
                right
                top
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-container>
      <v-container>
        <h1 class="text-center font-weight-black display-3 white--text mx-auto">
          Nuestras Sucursales
        </h1>
      </v-container>
      <v-col>
        <v-card class="mx-auto" max-width="500">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.shopify.com/s/files/1/0554/4053/9857/files/DJI_0099_540x.jpg?v=1617049215g"
          >
          </v-img>

          <v-card-title>Food Dish en Los Andes</v-card-title>
          <v-card-subtitle class="pb-0"> Ubicación </v-card-subtitle>
          <v-card-text class="text--primary">
            <div>
              Rinconada de los Andes, Los Andes Carretera San Martín N° 253
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="500">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.shopify.com/s/files/1/0554/4053/9857/files/f28919fc-bf63-4bc6-b351-2c2a09af6cf4_540x.jpg?v=1616779302"
          >
          </v-img>
          <v-card-title>Food Dish Rosario</v-card-title>
          <v-card-subtitle class="pb-0"> Ubicación </v-card-subtitle>
          <v-card-text class="text--primary">
            <div>Casa Matriz Longitudinal Sur Km. 109, Cruce Rosario.</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StepperView from '@/components/StepperView.vue';
import HelloWorld from '@/components/HelloWorld.vue';
export default {
    data() {
        return {
            items: [
                {
                    src: "https://img.freepik.com/premium-vector/flat-design-food-ig-stories-set_23-2149126174.jpg?w=1380",
                },
                {
                    src: "https://img.freepik.com/premium-vector/pizza-restaurant-banner-template_23-2148755370.jpg?w=996",
                },
                {
                    src: "https://img.freepik.com/free-vector/pizza-restaurant-instagram-stories_23-2148860369.jpg?t=st=1657381053~exp=1657381653~hmac=d6a1fd5b9f1b42563007f7fc02fdd0fefd6eb3d30ba8424adc2a8ee6df008ae6&w=996",
                },
                {
                    src: "https://img.freepik.com/premium-psd/japanese-food-restaurant-instagram-posts-collection_23-2149447416.jpg?w=1380",
                },
            ],
        };
    },
    components: { StepperView, HelloWorld }
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>

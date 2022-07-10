<template>
  <v-container>
    <v-stepper v-model="e1" style="background-color: #FF8A65">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1" color="#26c6da"> </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2" color=#0D47A1  > </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3" color=#D81B60> </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12 mx-auto" color="#26c6da" dark height="250px">
            <v-card-title>
              <v-icon large left> mdi-twitter </v-icon>
              <span class="text-h6 font-weight-light">Twitter</span>
            </v-card-title>
            <v-card-text class="text-h5 font-weight-bold">
              "Era el cumpleaños de mi mujer y buscaba una comida especial y 
              de calidad. Un total acierto. Todo muy bueno y el personal siempre atento."
            </v-card-text>
            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    alt=""
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Jorge Santander</v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <v-icon class="mr-1" color="red"> mdi-heart </v-icon>
                  <span class="subheading mr-2">256</span>
                  <span class="mr-1">·</span>
                  <v-icon class="mr-1" color="black"> mdi-share-variant </v-icon>
                  <span class="subheading">45</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
          <v-btn color="#004D40" class="white--text" @click="e1 = 2"> Siguiente </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-12 mx-auto" color=#0D47A1 dark height="250px">
            <v-card-title>
              <v-icon large left> mdi-facebook </v-icon>
              <span class="text-h6 font-weight-light">Facebook</span>
            </v-card-title>
            <v-card-text class="text-h5 font-weight-bold">
              "Local agradable en el que pedimos el menú degustación de verano en la que los 
              platos estaban equilibrados pero no puedo dejar de resaltar que el primero 
              (sopa fría de melón) ."
            </v-card-text>
            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    alt=""
                    src="https://i.pinimg.com/736x/ef/b4/56/efb4563befb0ae1bed74f004785f3f0f.jpg"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Anastacia Rivera</v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <v-icon class="mr-1" color="red"> mdi-heart </v-icon>
                  <span class="subheading mr-2">256</span>
                  <span class="mr-1">·</span>
                  <v-icon class="mr-1" color="black"> mdi-share-variant </v-icon>
                  <span class="subheading">45</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
          <v-btn color="#004D40" class="white--text" @click="e1 = 3"> Siguiente </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-12 mx-auto" color=#D81B60 dark height="250px">
            <v-card-title>
              <v-icon large left> mdi-instagram </v-icon>
              <span class="text-h6 font-weight-light">Instagram</span>
            </v-card-title>
            <v-card-text class="text-h5 font-weight-bold">
              "Ha sido una experiencia fabulosa. La comida supero nuestras expectativas. En todos los platos, incluido el aperitivo, se saboreaba la combinación de experiencia y 
              el cariño de una labor vocacional. Atención y trato hacia el cliente personalizado y exquisito."
            </v-card-text>
            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    alt=""
                    src="https://c8.alamy.com/zoomses/9/e33b4fbeaaf14f019189ca39da8afbe1/p942gx.jpg"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Guillermo Salas</v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <v-icon class="mr-1" color="red"> mdi-heart </v-icon>
                  <span class="subheading mr-2">256</span>
                  <span class="mr-1">·</span>
                  <v-icon class="mr-1" color="black"> mdi-share-variant </v-icon>
                  <span class="subheading">45</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
          <v-btn color="#004D40" class="white--text" @click="e1 = 1"> Siguiente </v-btn>
        </v-stepper-content>

      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
    };
  },
};
</script>

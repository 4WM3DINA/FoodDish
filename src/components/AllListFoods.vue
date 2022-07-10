<template>
  <v-container fluid>
    <v-col cols="12">
      <h1 class="display-3 text-center mb-5 font-weight-medium text-decoration-underline white--text">
        Lista de Pedidos
      </h1>
      <hr />
    </v-col>
    <v-row wrap justify-space-around>
      <v-col
        cols="12"
        lg="4"
        md="4"
        sm="6"
        xs="12"
        v-for="item in food"
        :key="item.name"
      >
        <v-card class="mb-5 mt-5 mx-auto">
          <v-img contain height="300px" :src="item.src"> </v-img>
          <v-card-text class="font-weight-bold grey lighten-2">
            <h2 class="text-center mb-7 mt-5 text-decoration-underline">{{ item.name }}</h2>
            <v-timeline align-top dense>
              <v-timeline-item color="lime lighten-1" small>
                <v-row>
                  <v-col class="font-weight-regular body-1" cols="5">
                    <h3>Precio:</h3>
                    <h4 class="font-weight-bold">
                      ${{ item.price.toLocaleString() }}</h4
                    >
                    Duración: {{ item.place }}
                  </v-col>
                </v-row>
              </v-timeline-item>
              <v-timeline-item color="light-green darken-4" small>
                <v-row class>
                  <v-col class="font-weight-regular body-1" cols="6">
                    <h4>Personas Adultas:</h4>
                      {{ item.personadult }}
                    <h4>Pedido Completado:</h4> {{ chipState(item.completed) }}
                  </v-col>
                </v-row>
              </v-timeline-item>
              <v-timeline-item color="pink accent-4" small>
                <v-row class>
                  <v-col class="font-weight-regular body-1" cols="5">
                    <h4>Fecha de Pedido:</h4> {{ dateFormat(item.date, "MM-dd-yyyy") }}
                  </v-col>
                </v-row>
              </v-timeline-item>
              <v-timeline-item color="blue" small>
                <v-row class>
                  <v-col class="font-weight-regular body-1" cols="5">
                    <h4>Cantidad de Niños:</h4> {{ item.kids }}
                  </v-col>
                </v-row>
              </v-timeline-item>
              <v-timeline-item color="red" small>
                <v-row class>
                  <v-col class="font-weight-regular body-1" cols="6">
                    <h4>Número de Teléfono:</h4> {{ item.description }}
                  </v-col>
                </v-row>
              </v-timeline-item>
              <v-timeline-item color="teal darken-4" small>
                <v-row class>
                  <v-col class="font-weight-regular body-1 text-justify" cols="10">
                   <h4>Notas al Chef: <br /></h4> 
                    {{ item.notes }}
                  </v-col>
                </v-row>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    ...mapActions(["get_food"]),
    chipState(completed) {
      if (completed === true) return "Sí";
      else return "No";
    },
   dateFormat(inputDate, format) {
      const date = new Date(inputDate);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      format = format.replace("MM", month.toString().padStart(2, "0"));
      if (format.indexOf("yyyy") > -1) {
        format = format.replace("yyyy", year.toString());
      } else if (format.indexOf("yy") > -1) {
        format = format.replace("yy", year.toString().substr(2, 2));
      }
      format = format.replace("dd", day.toString().padStart(2, "0"));
      return format;
    },
  },
  computed: {
    ...mapState(["food"]),
  },
  created() {
    this.get_food();
  },
};
</script>

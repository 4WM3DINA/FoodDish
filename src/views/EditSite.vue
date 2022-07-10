<template>
  <v-app>
    <v-container fluid>
      <v-col cols="12"
        ><div class="d-flex justify-center align-center">
          <h1 class="display-3 mb-5 font-weight-medium">
            Editando el curso: {{ foodsData.name }}
          </h1>
        </div>
        <v-form class="mt-10" ref="formAdd" v-model="valid">
          <v-col cols="12">
            <v-text-field
              label="Nombre del Menú"
              v-model="foods.name"
              :rules="textRules"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="URL de la imágen del Menú"
              v-model="foods.src"
              :rules="textRules"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Cantidad de Personas Adultas"
              v-model.number="foods.personadult"
              type="number"
              min="0"
              :rules="textRules"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Cantidad de Niños"
              v-model.number="foods.kids"
              type="number"
              min="0"
              :rules="kidsRules"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Lugar Para Comer: (Terraza/Salón Principal o Delivery)"
              v-model="foods.place"
              :rules="textRules"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Fecha de Pedido"
              v-model="foods.date"
              :rules="textRules"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Costo del Menú"
              v-model.number="foods.price"
              type="number"
              min="0"
              :rules="textRules"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Notas al Chef"
              v-model="foods.notes"
              :rules="textRules"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              label="Número de contacto"
              v-model="foods.description"
              outlined
              :rules="textRules"
              required
            ></v-textarea>
            <v-switch v-model="foods.completed" label="Terminado"></v-switch>
            <div>
              <v-btn block
                class="mx-auto mb-2"
                color="success"
                :disabled="!valid"
                @click="updateFoods"
              >
                ACTUALIZAR
              </v-btn>

              <v-btn block color="error" class="mx-auto mb-2" @click="reset">
                LIMPIAR FORMULARIO
              </v-btn>

              <v-btn block color="warning" class="mx-auto mb-2" @click="resetValidation">
                LIMPIAR VALIDACIÓN
              </v-btn>
              <v-btn block class="mx-auto" color="primary" @click="back"> REGRESAR </v-btn>
            </div>
          </v-col>
        </v-form>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Edit",
  data() {
    return {
      foods: {
        name: "",
        price: "",
        place: "",
        personadult: "",
        kids: "",
        completed: false,
        date: "",
        description: "",
        src: "",
        notes: "",
      },
      textRules: [(v) => !!v || "Field is required"],
      kidsRules: [
        (v) =>
          v <= this.foods.personadult ||
          "More students than available spaces",
      ],
      valid: false,
    };
  },

  methods: {
    ...mapActions(["update_foods", "get_food"]),
    updateFoods() {
      this.update_foods({ ...this.foods });
      this.foods = {};
      this.back()
    },
    reset() {
      this.$refs.formAdd.reset();
    },
    resetValidation() {
      this.$refs.formAdd.resetValidation();
    },
    back() {
      this.$router.push("/admin");
    },
  },
  computed: {
    ...mapState(["food"]),

    foodsData() {
      const { food } = this;
      const { id } = this.$route.params;
      this.foods = food.find((u) => u.id == id);
      return this.foods;
    },
  },
  created() {
    this.get_food();
  },
};
</script>

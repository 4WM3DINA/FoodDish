<template>
  <v-container fluid>
    <v-col cols="12">
        <h1 class="display-3 mb-5 font-weight-medium text-center text-decoration-underline white--text">Administración Menús.</h1>
        <v-btn color="purple" class="white--text mb-3"  @click="moreFoods()"
          >AGREGAR MENÚ</v-btn>
    </v-col>
    <v-col cols="12">
      <v-card class="mx-auto" cols="12">
        <template>
          <v-data-table :headers="headers" :items="food" class="elevation-1">
            <template v-slot:[`item.price`]="{ item }">
              <v-chip color="success" dark>
                ${{ item.price.toLocaleString() }}
              </v-chip>
            </template>
            <template v-slot:[`item.date`]="{ item }">
              <v-chip color="success" dark>
                {{ dateFormat(item.date, "MM-dd-yyyy") }}
              </v-chip>
            </template>
            <template v-slot:[`item.completed`]="{ item }">
              <v-chip :color="alertColor(item.completed)" dark>
                {{ chipState(item.completed) }}
              </v-chip>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon small class="mr-2" @click="clickUpdate(item.id)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="clickDelete(item.id)">
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
          <template>
            <v-row justify="center">
              <v-dialog v-model="dialog" max-width="800px">
                <v-card>
                  <v-card-title> 
                    <v-col cols="12">
                      <h4 class="display-1 mb-5 font-weight-medium mx-auto ">Agregando Menú</h4>
                    </v-col>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-form ref="formAdd" v-model="valid">
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
                            label="Lugar Para Comer: (Terraza/Salón Principal o Delivery) "
                            v-model="foods.place"
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
                          <v-text-field
                            label="Fecha de Pedido"
                            v-model="foods.date"
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
                        </v-col>
                      </v-form>
                    </v-container>
                  </v-card-text>
                  <v-row>
                    <v-btn block
                      class="mx-auto mb-2"
                      color="success"
                      :disabled="!valid"
                      @click="addFoods"
                    >
                      AGREGAR
                    </v-btn>

                    <v-btn block color="error" class="mx-auto mb-2" @click="reset">
                      LIMPIAR FORMULARIO
                    </v-btn>

                    <v-btn block class="mx-auto" color="warning" @click="resetValidation">
                      LIMPIAR VALIDACIÓN
                    </v-btn>     
                  </v-row>
                </v-card>
              </v-dialog>
            </v-row>
          </template>
        </template>
      </v-card>
      <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
          <v-card-title class="text-h5"
            >¿Estas seguro de querer eliminar?</v-card-title
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDelete"
              >Cancelar</v-btn
            >
            <v-btn color="blue darken-1" text @click="deleteFoods()">OK</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
     <InformationView
        icon="mdi-account-group"
        :comp="totalPersonadult"
        text="Cantidad total de personas adultas"
        outlineColor="#a63eb8"
        textColor="#a63eb8"
        iconColor="#a63eb8"
        backgroundColor="#f5f5dc"
      />
      <InformationView
        icon="mdi-account-multiple-check"
        :comp="allKids"
        text="Cantidad total de niños"
        outlineColor="#3da1f1"
        textColor="#3da1f1"
        iconColor="#3da1f1"
        backgroundColor="#f5f5dc"
      />
      <InformationView
        icon="mdi-block-helper"
        :comp="completedFoodCount"
        text="Cantidad de pedidos completados"
        outlineColor="#e8296a"
        textColor="#e8296a"
        iconColor="#e8296a"
        backgroundColor="#f5f5dc"
      />
      <InformationView
        icon="mdi-bell-ring"
        :comp="totalFood"
        text="Cantidad total de pedidos"
        outlineColor="#fd5f2d"
        textColor="#fd5f2d"
        iconColor="#fd5f2d"
        backgroundColor="#f5f5dc"
      />
    </v-col>
  </v-container>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import InformationView from "@/components/InformationView.vue";

export default {
  data() {
    return {
      foods: {
        name: "",
        price: "",
        place: "",
        personadult: "",
        kids: "",
        completed: false,
        date: date,
        description: "",
        src: "",
        notes: "",
      },
      headers: [
        {
          text: "Nombre",
          align: "center",
          sortable: false,
          value: "name",
        },
        { text: "Adultos", value: "personadult", align: "center",
          sortable: false },
        { text: "Niños", value: "kids" , align: "center",
          sortable: false },
        { text: "Lugar", value: "place" , align: "center",
          sortable: false },
        { text: "Precio", value: "price" , align: "center",
          sortable: false },
        { text: "Estado", value: "completed" , align: "center",
          sortable: false },
        { text: "Fecha pedido", value: "date" , align: "center",
          sortable: false },
        { text: "Teléfono", value: "description" , align: "center",
          sortable: false },
        { text: "Acciones", value: "actions" , align: "center",
          sortable: false },
      ],
      dialog: false,
      dialogDelete: false,
      valid: false,
      textRules: [(v) => !!v || "Field is required"],
      kidsRules: [
        (v) =>
          v <= this.foods.personadult ||
          "More students than available spaces",
      ],
      idDelete: "",
      idEdit: "",
    };
  },
   components: {
    InformationView,
  },
  methods: {
    ...mapActions([
      "add_foods",
      "delete_foods",
      "update_foods",
      "get_food",
    ]),
    addFoods() {
      this.add_foods({ ...this.foods });
      this.dialog = false;
    },
    deleteFoods() {
      console.log(this.idDelete);
      this.delete_foods(this.idDelete);
      this.closeDelete();
    },
    moreFoods() {
      this.dialog = true;
    },
    clickDelete(id) {
      console.log(id);
      this.idDelete = id;
      this.dialogDelete = true;
    },
    clickUpdate(id) {
      console.log(id);
      this.idEdit = id;
      this.$router.push({ path: `/edit/${this.idEdit}` });
    },
    alertColor(completed) {
      if (completed === true) return "blue";
      else return "grey";
    },
    chipState(completed) {
      if (completed === true) return "Sí";
      else return "No";
    },

    reset() {
      this.$refs.formAdd.reset();
    },
    resetValidation() {
      this.$refs.formAdd.resetValidation();
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
    deleteItem() {
      this.dialogDelete = true;
    },
    closeDelete() {
      this.dialogDelete = false;
    },
  },

  computed: {
    ...mapState(["food"]),
    ...mapGetters(["completedFoodCount"]),
    totalPersonadult() {
      return this.food.reduce(
        (acc, cur) => acc + Number(cur.personadult),
        0
      );
    },
    allKids() {
      return this.food.reduce((acc, cur) => acc + Number(cur.kids), 0);
    },
    totalFood() {
      return this.food.length;
    },
    completedFoodCount() {
      return this.$store.getters.completedFoodCount;
    },
  },
  watch: {
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.get_food();
  },
};

let today = new Date();

let date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
</script>

<style>
#totalPersonadult {
  outline: 1px solid #a63eb8;
}
</style>

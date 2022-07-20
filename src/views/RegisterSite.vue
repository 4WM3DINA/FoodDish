<template>
  <!-- Registro de Usuario -->
  <div class="mt-10" style="background-color: orange; border-radius: 15px">
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="text-left dark--text text-center">Registro de Usuario</h1>
        <v-alert
          color="#2A3B4D"
          dark
          icon="mdi-firework"
          dense
          class="text-center"
        >
          Avatar de Identificación Modo Pokemon
        </v-alert>
        <v-form @submit.prevent="pokemonUrl" class="text-center">
          <h3 class="purple darken-2 text-center white--text">
            Escriba el nombre:
          </h3>
          <v-text-field
            label="Escribe tu Pokemón (En Miniscula)"
            v-model="newSearch"
            class="mt-3 lime darken-4"
          >
          </v-text-field>
          <v-btn
            type="submit"
            color="purple darken-2"
            elevation="2"
            class="mt-2 white--text"
          >
            Buscar</v-btn
          >
        </v-form>
        <div class="summary--container text-center">
          <div class="image--container">
            <img class="image--container__image" :src="sprite" alt="" />
            <h2 class="image--container__name">{{ newSearch }}</h2>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-form v-model="valid" ref="formRegister">
      <v-row justify="center">
        <v-col cols="12">
          <v-text-field
            v-model="user.email"
            label="Email"
            :rules="emailRules"
            required
            class="bg-white"
          >
          </v-text-field>
          <v-text-field
            v-model="user.password"
            label="Password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passwordRules"
            :type="show1 ? 'text' : 'password'"
            required
            counter
            maxlength="20"
            @click:append="show1 = !show1"
          >
          </v-text-field>
          <v-text-field
            v-model="user.repassword"
            label="Repita la contraseña"
            :rules="repasswordRules"
            required
          >
          </v-text-field>

          <v-btn
            block
            class="mx-auto mb-2"
            color="success"
            :disabled="!valid"
            @click="registerUser"
            >Registrar</v-btn
          >
          <v-btn block class="mx-auto mb-2" color="error" @click="reset"
            >Limpiar Formulario</v-btn
          >
          <v-btn block class="mx-auto" color="warning" @click="reset"
            >Limpiar Validación</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default {
  data() {
    return {
      newSearch: "pikachu",
      pokemonSearched: [],
      valid: false,
      user: {
        email: "",
        password: "",
        repassword: "",
      },
      show1: false,
      emailRules: [
        (v) => (v && !!v.trim()) || "Escribe algo, no solo espacios.",
        (v) => !!v || "Por favor, escriba correo electrónico.",
        (v) =>
          /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(v) || "Formato incorrecto.",
      ],
      passwordRules: [
        (v) => (v && !!v.trim()) || "Escribe algo, no solo espacios.",
        (v) => !!v || "Por favor, escriba la contraseña.",
        (v) => (v && v.length > 5) || "Se requieren más de 6 caracteres.",
        (v) => (v && v.length < 12) || "Se requieren menos de 12 caracteres.",
      ],
      repasswordRules: [
        (v) => !!v || "No existe",
        (v) => v === this.user.repassword || "No coinciden las contraseñas",
      ],
    };
  },
  created() {
    this.pokemonUrl();
  },
  methods: {
    async registerUser() {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.user.email,
          this.user.password
        );
        this.$router.push("/login");
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("El correo ya está siendo utilizado");
            break;
        }
      }
    },
    pokemonUrl() {
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.newSearch}`)
        .then((response) => response.json())
        .then(
          (pokemonInformation) => (this.pokemonSearched = pokemonInformation)
        );
    },
    reset() {
      this.$refs.formRegister.reset();
    },
  },
  computed: {
    sprite() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonSearched.id}.png`;
    },
  },
};
</script>

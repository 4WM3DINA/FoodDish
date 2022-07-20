<template>
  <!-- Login de Usuario -->
  <div class="mt-10" style="background-color: orange; border-radius: 15px">
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="text-left darj--text text-center">Login de Usuario</h1>
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

          <v-btn
            block
            color="success"
            class="mx-auto mb-2"
            :disabled="!valid"
            @click="loginUser"
          >
            Iniciar
          </v-btn>
          <v-btn block color="error" class="mx-auto mb-2" @click="reset"
            >Limpiar Formulario</v-btn
          >
          <v-btn block color="warning" class="mx-auto" @click="reset"
            >Limpiar Validación</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";

export default {
  data() {
    return {
      valid: false,
      user: {
        email: "",
        password: "",
      },
      dialog: false,
      show1: false,
      emailRules: [
        (v) => (v && !!v.trim()) || "Escribe algo, no solo espacios.",
        (v) => !!v || "Por favor, escriba correo electrónico.",
        (v) => /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(v) || "Formato incorrecto",
      ],
      passwordRules: [
        (v) => !!v || "Por favor, repite la contraseña.",
        (v) => (v && v.length > 5) || "Se requieren más de 6 caracteres.",
        (v) => (v && v.length < 12) || "Se requieren menos de 12 caracteres.",
      ],
    };
  },
  methods: {
    async loginUser() {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          this.user.email,
          this.user.password
        );
        this.$router.push("/home");
      } catch (error) {}
    },
    reset() {
      this.$refs.formRegister.reset();
    },
  },
};
</script>

<style scoped>
.v-btn {
  letter-spacing: 0;
}
</style>

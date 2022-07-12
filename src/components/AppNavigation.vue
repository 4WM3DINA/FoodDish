<template>
  <div>
    <v-app-bar app color="orange darken-4" dark elevation="24">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-medium" style="color: #fce4ec"
        >FOOD DISH
        <v-icon large color="white" class="mr-3">
          mdi-food
        </v-icon></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <h5
        v-if="user !== null"
        class="mr-5 font-weight-medium d-none d-lg-flex d-xl-none"
        style="font-weight: 300; text-transform: uppercase; color: ##fce4ec"
      >
        {{ user.email }}
      </h5>
      <v-icon @click="signOff" v-if="user !== null">mdi-logout</v-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary color="#F57C00">
      <div class="text-center">
        <v-avatar>
          <img
            src="https://img.freepik.com/free-vector/cute-woman-chef-holding-cloche-food-tray-hand-drawn-logo-cartoon-art-illustration_56104-1110.jpg?t=st=1657158784~exp=1657159384~hmac=db4d13fad0d4f1bddb9e9e8c86c2fa65c472338bcd04f9db53a4b3615bac9355&w=826"
            alt="John"
          />
        </v-avatar>
      </div>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/home" v-if="user">
            <v-list-item-icon>
              <v-icon color="purple">mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/" v-if="!user">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Principal</v-list-item-title>
          </v-list-item>

          <v-list-item to="/login" v-if="!user">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>

          <v-list-item to="/galeria" v-if="!user">
            <v-list-item-icon>
              <v-icon>mdi-image-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Galeria</v-list-item-title>
          </v-list-item>

          <v-list-item to="/register" v-if="!user">
            <v-list-item-icon>
              <v-icon>mdi-account-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Registro</v-list-item-title>
          </v-list-item>

          <v-list-item to="/mision" v-if="!user">
            <v-list-item-icon>
              <v-icon>mdi-crown</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Misión</v-list-item-title>
          </v-list-item>

          <v-list-item to="/vision" v-if="!user">
            <v-list-item-icon>
              <v-icon>mdi-star-shooting-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Visión</v-list-item-title>
          </v-list-item>

          <v-list-item to="/admin" v-if="user">
            <v-list-item-icon>
              <v-icon color="purple">mdi-pencil</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Administración</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
export default {
  name: "navbar",
  data: () => ({
    drawer: false,
    group: null,
    user: null,
    dialog: false,
  }),
  beforeCreate() {
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });
  },
  methods: {
    async signOff() {
      await signOut(auth);
      this.$router.push("/");
    },
  },
};
</script>




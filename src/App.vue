<template>
  <v-app class="app">
    <AppNavigation />
    <v-main>
      <router-view />
    </v-main>
    <FooterWeb />
  </v-app>
</template>

<script>
import AppNavigation from "@/components/AppNavigation.vue";
import FooterWeb from "@/components/FooterWeb.vue";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";

export default {
  name: "App",
  components: { AppNavigation, FooterWeb },
  data: () => ({
    //
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

<style scoped>
.v-main{
  background-image: url("./assets/4452317.jpg");
  background-size: 100%;
  background-repeat: repeat;
  width: 100%;
}
</style>

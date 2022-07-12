<template>
  <div class="fondo">
    <v-container>
    <v-img :aspect-ratio="16/9"
      :width="width"
      src="https://www.myphukettravel.com/myphukettravel/public/assets/front-end/images/404.gif" class="mt-5"></v-img>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.fondo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
</style>
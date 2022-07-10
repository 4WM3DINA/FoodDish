<template>
  <div
    class="mt-10 pa-3 d-flex align-center"
    :style="`outline: 2px solid ${outlineColor}; border-radius: 5px; color: ${textColor}; background-color: ${backgroundColor};`"
  >
    <v-icon class="me-5" :style="`color: ${iconColor}`"> {{ icon }}</v-icon>
    <span
      >{{ text }} <strong>{{ comp }}</strong> </span
    >
  </div>
</template>

<script>
export default {
  props: ["icon", "text", "comp", "outlineColor", "textColor", "iconColor", "backgroundColor"],
};
</script>

<style></style>
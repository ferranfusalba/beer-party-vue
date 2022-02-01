<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default {
  name: "App",
  mounted() {
    this.$store.dispatch("getBeers");
  },
};
</script>

<style src="@/styles/style.css"></style>
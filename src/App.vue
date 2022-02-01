<template>
  <div>
    <div class="row">
      <div class="col-0 col-md-3"></div>
      <div class="col-12 col-md-6"><router-view /></div>
      <div class="col-0 col-md-3"></div>
    </div>
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
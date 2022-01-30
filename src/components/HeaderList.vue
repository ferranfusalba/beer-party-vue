<template>
  <nav class="navbar fixed-top navbar-light bg-florinian mhHeader">
    <div class="container-fluid d-flex justify-content-center">
        <router-link to="/beers" class="navbar-brand text-white tdn m-0">Beer Party!</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style src="@/styles/style.css"></style>
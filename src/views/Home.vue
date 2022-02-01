<template>
  <HeaderList />
  <div class="container">
    <div>
      Welcome to Deale's party beer guide.
      <br>
      Choose your favourite one and join us!
    </div>
    <div class="mt-4">
      <router-link to="/beers"><button class="btn btn-primary">List of beers</button></router-link>
    </div>
  </div>
</template>

<script>
import HeaderList from "@/components/HeaderList.vue";

export default {
  name: "Home",
  components: {
    HeaderList,
  },
};
</script>
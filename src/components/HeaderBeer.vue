<template>
  <nav class="navbar fixed-top navbar-light bg-florinian mhHeader">
      <div class="col-3 plButton d-flex justify-content-start">
        <GoBack />
      </div>
      <div class="col-9">
        <h5 class="text-white m-0">{{beerName}}</h5>
      </div>
  </nav>
</template>

<script>
import GoBack from "@/components/GoBack.vue";

export default {
  name: "Header",
  props: ["beerName"],
  components: {
    GoBack
  }
};
</script>

<style src="@/styles/style.css"></style>
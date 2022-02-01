<template>
  <nav class="fixed-top bg-florinian mhHeader">
    <div class="d-flex justify-content-start">
      <div class="plButton">
        <GoBack />
      </div>
      <div class="plButtonText d-flex align-items-center">
        <h5 class="text-white workSans text-start m-0">{{beerName}}</h5>
      </div>
    </div>
  </nav>
</template>

<script>
import GoBack from "@/components/GoBack.vue";

export default {
  name: "Header",
  props: ["beerName"],
  components: {
    GoBack,
  },
};
</script>

<style src="@/styles/style.css"></style>
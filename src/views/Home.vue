<template>
  <HeaderList />
  <div class="container">
    <div>
      Welcome to Deale's party beer guide.
      <br>
      Choose your favourite one and join us!
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
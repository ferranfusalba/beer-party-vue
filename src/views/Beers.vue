<template>
<HeaderList />
  <div class="container">
    <h1 class="text-center">List of beers</h1>
    <div v-for="(beer, index) in beerList" :key="index">
      <router-link :to="{ name: 'Beer', params: { id: beer.id } }" class="tdn">
        <div class="card mt-2 mb-2">
          <div class="row g-0">
            <div class="col-2">
              <img
                :src="beer.image_url"
                class="img-fluid rounded-start"
                alt="..."
                style="height: 100px"
              />
            </div>
            <div class="col-10">
              <div class="card-body">
                <h5 class="card-title">{{ beer.name }}</h5>
                <p class="card-text">
                  {{ beer.tagline }}
                </p>
                <div class="border border-success rounded-pill bg-success"><small class="text-white">ADV</small></div>
                <small>IBU</small>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import HeaderList from "@/components/HeaderList.vue";

export default {
  name: "Beers",
  components: {
    HeaderList,
  },
  data() {
    return {
      beerList: [],
    };
  },
  mounted() {
    this.beerList = this.$store.state.beers;
  },
};
</script>

<style src="@/styles/style.css"></style>
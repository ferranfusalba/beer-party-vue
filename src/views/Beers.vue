<template>
  <HeaderList />
  <div class="container">
    <div class="mb-4 introMsg">
      Welcome to Deale's party beer guide.
      <br>
      Choose your favourite one and join us!
    </div>
    <h1 class="text-center mb-3 titleBeersPage">List of beers</h1>
    <div v-for="(beer, index) in beerList" :key="index">
      <router-link :to="{ name: 'Beer', params: { id: beer.id } }" class="tdn">
        <div class="card mt-3 cardBeer">
          <div class="row g-0">
            <div class="col-2 d-flex align-items-center justify-content-center">
              <img
                :src="beer.image_url"
                class="img-fluid rounded-start beerImg"
                alt="Beer tag ('Keg only') or beer tag with design"
              />
            </div>
            <div class="col-10">
              <div class="card-body">
                <h5 class="card-title beerName">{{ beer.name }}</h5>
                <p class="card-text beerTagline">
                  {{ beer.tagline }}
                </p>
                <div class="d-flex flex-row justify-content-center">
                  <Tag
                    :tagName="'ABV: '"
                    :tagData="beer.abv"
                    :tagStyle="'tagABV'"
                  />
                  <div v-if="beer.ibu != null">
                    <Tag
                      :tagName="'IBU: '"
                      :tagData="beer.ibu"
                      :tagStyle="'tagIBU'"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <Footer />
  </div>
</template>

<script>
import HeaderList from "@/components/HeaderList.vue";
import Tag from "@/components/Tag.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Beers",
  components: {
    HeaderList,
    Tag,
    Footer
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
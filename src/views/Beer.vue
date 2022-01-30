<template>
  <HeaderBeer :beerName="beerLocal.name" />
  <div class="container">
    <!-- Image -->
    <img :src="beerLocal.image_url" alt="" srcset="" style="height: 200px" />
    <!-- Name -->
    <h1 class="text-center mt-2">{{ beerLocal.id }} - {{ beerLocal.name }}</h1>
    <!-- Tagline -->
    <h5>{{ beerLocal.tagline }}</h5>
    <!-- Description -->
    <div class="text-start">
      <small>{{ beerLocal.description }}</small>
    </div>
    <!-- Three data types -->
    <div class="row mt-2">
      <div class="col-4 border rounded">
        <div>First brewed</div>
        <div>{{ beerLocal.first_brewed }}</div>
      </div>
      <div class="col-4 border rounded">
        <div>ABV</div>
        <div>{{ beerLocal.abv }}</div>
        <div><i class="bi bi-info-circle"></i></div>
      </div>
      <div class="col-4 border rounded">
        <div>IBU</div>
        <div>{{ beerLocal.ibu }}</div>
        <div><i class="bi bi-info-circle"></i></div>
      </div>
    </div>
    <!-- Other data Accordion -->
    <div class="accordion mt-2" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Other data
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body text-start">
            <div class="mb-1">
              <i class="bi bi-info-circle"></i> target_fg:
              {{ beerLocal.target_fg }}
            </div>
            <div class="mb-1">
              <i class="bi bi-info-circle"></i> target_og:
              {{ beerLocal.target_og }}
            </div>
            <div class="mb-1">
              <i class="bi bi-info-circle"></i> ebc: {{ beerLocal.ebc }}
            </div>
            <div class="mb-1">
              <i class="bi bi-info-circle"></i> srm: {{ beerLocal.srm }}
            </div>
            <div class="mb-1">
              <i class="bi bi-info-circle"></i> ph: {{ beerLocal.ph }}
            </div>
            <div>
              <i class="bi bi-info-circle"></i> attenuation_level:
              {{ beerLocal.attenuation_level }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Volume & Boil volume -->
    <div class="row mt-2">
      <div class="col-6 border rounded">
        <div>Volume</div>
        <div>{{ beerLocal.volume.value }} {{ beerLocal.volume.unit }}</div>
      </div>
      <div class="col-6 border rounded">
        <div>Boil volume</div>
        <div>
          {{ beerLocal.boil_volume.value }} {{ beerLocal.boil_volume.unit }}
        </div>
      </div>
    </div>
    <!-- Method -->
    <div class="row mt-2">
      <h5>Method</h5>
      <!-- mash_temp -->
      <div class="col-6">
        <div><b>mash_temp</b></div>
        <div>
          temp: {{ beerLocal.method.mash_temp[0].temp.value }}
          {{ beerLocal.method.mash_temp[0].temp.unit }}
        </div>
        <div>duration: {{ beerLocal.method.mash_temp[0].duration }}</div>
      </div>
      <!-- fermentation -->
      <div class="col-6">
        <div><b>fermentation</b></div>
        <div>
          temp: {{ beerLocal.method.fermentation.temp.value }}
          {{ beerLocal.method.fermentation.temp.unit }}
        </div>
      </div>
      <!-- Twist, only shown if does not return null -->
      <div v-if="beerLocal.method.twist == null"></div>
      <div v-else-if="beerLocal.method.twist != null">
        twist: {{ beerLocal.method.twist }}
      </div>
    </div>
    <!-- Ingredients -->
    <div class="mt-2">
      <h4>Ingredients</h4>
      <h5>Malt</h5>
      <div
        v-for="maltObject in beerLocal.ingredients.malt"
        :key="maltObject"
        class="mb-2"
      >
        {{ maltObject.name }}
        <br />
        {{ maltObject.amount.value }} - {{ maltObject.amount.unit }}
      </div>
      <h5>Hops</h5>
      <div
        v-for="hopsObject in beerLocal.ingredients.hops"
        :key="hopsObject"
        class="mb-2"
      >
        {{ hopsObject.name }}
        <br />
        {{ hopsObject.amount.value }} - {{ hopsObject.amount.unit }}
        <br />
        {{ hopsObject.add }}
        <br />
        {{ hopsObject.attribute }}
      </div>
      <h5>Yeast</h5>
      {{ beerLocal.ingredients.yeast }}
    </div>
    <!-- Food pairing -->
    <div class="mt-2">
      <h5>Food pairing</h5>
      <ul class="text-start">
        <li v-for="item in beerLocal.food_pairing" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
    <!-- Brewers tips -->
    <div class="mt-2">
      <h5>Brewers tips</h5>
      <div class="row">
        <div class="col-2">
          <i class="bi bi-person-circle"></i>
        </div>
        <div class="col-10 text-start">
          <p>{{beerLocal.brewers_tips}}</p>
          <small>{{beerLocal.contributed_by}}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBeer from "@/components/HeaderBeer.vue";

export default {
  name: "Beer",
  components: {
    HeaderBeer,
  },
  data() {
    return {
      beerLocal: {
        volume: {},
        boil_volume: {},
        method: {
          mash_temp: [
            {
              temp: {},
            },
          ],
          fermentation: {
            temp: {},
          },
          twist: "",
        },
        ingredients: {
          malt: [
            {
              name: "",
              amount: {},
            },
          ],
          hops: [
            {
              name: "",
              amount: {},
              add: "",
              attribute: "",
            },
          ],
          yeast: "",
        },
        food_pairing: [],
      },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.beerLocal = this.$store.state.beers[this.$route.params.id - 1];
    },
  },
};
</script>

<style scoped>
td {
  text-align: left;
}
</style>
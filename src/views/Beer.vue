<template>
  <HeaderBeer :beerName="beerLocal.name" />
  <div class="container">
    <!-- Image -->
    <img :src="beerLocal.image_url" alt="" srcset="" class="imgCoverBeer" />
    <!-- Name -->
    <h1 class="mt-4 beerName">{{ beerLocal.name }}</h1>
    <!-- ID Tag -->
    <div class="d-flex flex-row justify-content-center">
      <Tag
        class="mt-2"
        :tagName="'#'"
        :tagData="beerLocal.id"
        :tagStyle="'tagID'"
      />
    </div>
    <!-- Tagline -->
    <h5 class="mt-3 beerTagline">{{ beerLocal.tagline }}</h5>
    <!-- Description -->
    <div class="mt-3 descriptionSmall">
      <p>{{ beerLocal.description }}</p>
    </div>
    <!-- Three data types -->
    <div v-if="beerLocal.ibu != null">
      <div class="row marginsContainer workSans">
        <div class="col-4 threeDataTypeTag bg-coral">
          <div><i class="bi bi-calendar-check"></i></div>
          <div><b>First brewed</b></div>
          <div>{{ beerLocal.first_brewed }}</div>
        </div>
        <div class="col-4 threeDataTypeTag bg-abv">
          <div><b>ABV</b></div>
          <div>{{ beerLocal.abv }}</div>
          <Popper
            content="ABV, or alcohol by volume, is the standard measurement, used worldwide, to assess the strength of a particular beer. The higher the ABV, the more alcohol that beer contains."
          >
            <button class="btn btn-sm">
              <i class="bi bi-info-circle"></i>
            </button>
          </Popper>
        </div>
        <div class="col-4 threeDataTypeTag bg-ibu">
          <div><b>IBU</b></div>
          <div>{{ beerLocal.ibu }}</div>
          <Popper
            content="IBU stands for International Bitterness Unit. The IBU scale measures the bitterness leves in beer, based on the amount of hops added."
          >
            <button class="btn btn-sm">
              <i class="bi bi-info-circle"></i>
            </button>
          </Popper>
        </div>
      </div>
    </div>
    <div v-else-if="beerLocal.ibu == null">
      <div class="row marginsContainer workSans">
        <div class="col-6 threeDataTypeTag bg-coral">
          <div><i class="bi bi-calendar-check"></i></div>
          <div><b>First brewed</b></div>
          <div>{{ beerLocal.first_brewed }}</div>
        </div>
        <div class="col-6 threeDataTypeTag bg-abv">
          <div><b>ABV</b></div>
          <div>{{ beerLocal.abv }}</div>
          <Popper
            content="ABV, or alcohol by volume, is the standard measurement, used worldwide, to assess the strength of a particular beer. The higher the ABV, the more alcohol that beer contains."
          >
            <button class="btn btn-sm">
              <i class="bi bi-info-circle"></i>
            </button>
          </Popper>
        </div>
      </div>
    </div>
    <!-- Other data Accordion -->
    <div class="accordion mt-3 workSans" id="accordionOtherData">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOtherData">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOtherData"
            aria-expanded="false"
            aria-controls="collapseOtherData"
          >
            Other data
          </button>
        </h2>
        <div
          id="collapseOtherData"
          class="accordion-collapse collapse"
          aria-labelledby="headingOtherData"
          data-bs-parent="#accordionOtherData"
        >
          <div class="accordion-body text-start">
            <div class="mb-1">
              target_fg:
              {{ beerLocal.target_fg }}
            </div>
            <div class="mb-1">
              target_og:
              {{ beerLocal.target_og }}
            </div>
            <div class="mb-1">ebc: {{ beerLocal.ebc }}</div>
            <div class="mb-1">srm: {{ beerLocal.srm }}</div>
            <div class="mb-1">ph: {{ beerLocal.ph }}</div>
            <div>
              attenuation_level:
              {{ beerLocal.attenuation_level }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Volume & Boil volume -->
    <div class="row mt-3 workSans">
      <Volume
        volumeType="Volume"
        :volumeValue="beerLocal.volume.value"
        :volumeUnit="beerLocal.volume.unit"
      />
      <Volume
        volumeType="Boil volume"
        :volumeValue="beerLocal.boil_volume.value"
        :volumeUnit="beerLocal.boil_volume.unit"
      />
    </div>
    <!-- Method -->
    <div class="row mt-4">
      <h5 class="workSansB">Method</h5>
      <!-- mash_temp -->
      <div class="col-6 workSans">
        <Method
          methodType="Mash temp"
          :methodTempValue="beerLocal.method.mash_temp[0].temp.value"
          :methodTempUnit="beerLocal.method.mash_temp[0].temp.unit"
        />
        <!-- Duration, only shown if does not return null -->
        <div v-if="beerLocal.method.mash_temp[0].duration == null"></div>
        <div v-else-if="beerLocal.method.mash_temp[0].duration != null">
          <div>Duration: {{ beerLocal.method.mash_temp[0].duration }}</div>
        </div>
      </div>
      <!-- fermentation -->
      <div class="col-6 workSans">
        <Method
          methodType="Fermentation"
          :methodTempValue="beerLocal.method.fermentation.temp.value"
          :methodTempUnit="beerLocal.method.fermentation.temp.unit"
        />
      </div>
      <!-- Twist, only shown if does not return null -->
      <div v-if="beerLocal.method.twist == null"></div>
      <div v-else-if="beerLocal.method.twist != null">
        <div class="mt-2 border-0 workSans bg-twist">
          twist: {{ beerLocal.method.twist }}
        </div>
      </div>
    </div>
    <!-- Ingredients -->
    <div class="mt-4">
      <h4 class="workSansB">Ingredients</h4>
      <h5 class="mt-3 mb-3 workSansL bg-malt ingrTitle">Malt</h5>
      <div
        v-for="maltObject in beerLocal.ingredients.malt"
        :key="maltObject"
        class="mb-2"
      >
        <div class="row text-start workSans marginsContainer">
          <div class="col-7">
            <b>{{ maltObject.name }}</b>
          </div>
          <div class="col-5">
            {{ maltObject.amount.value }} {{ maltObject.amount.unit }}
          </div>
        </div>
      </div>
      <h5 class="mt-3 mb-3 workSansL bg-hops ingrTitle">Hops</h5>
      <div
        v-for="hopsObject in beerLocal.ingredients.hops"
        :key="hopsObject"
        class="mb-2"
      >
        <div class="row text-start workSans marginsContainer">
          <div class="col-7">
            <b>{{ hopsObject.name }}</b>
          </div>
          <div class="col-5">
            {{ hopsObject.amount.value }} {{ hopsObject.amount.unit }}
            <br />
            <div class="workSansL2">
              {{ hopsObject.add }}, {{ hopsObject.attribute }}
            </div>
          </div>
        </div>
      </div>
      <h5 class="mt-3 mb-3 workSansL bg-yeast ingrTitle">Yeast</h5>
      <div class="text-center workSans">
        {{ beerLocal.ingredients.yeast }}
      </div>
    </div>
    <!-- Food pairing -->
    <div class="mt-2">
      <h5 class="mt-4 mb-4 workSansB">Food pairing</h5>
      <!-- Card carousel -->
      <div
        class="row flex-row flex-nowrap marginsContainer cardFood0"
      >
        <div
          v-for="item in beerLocal.food_pairing"
          :key="item"
          class="card mb-3 mr-3 cardFood"
        >
          <img
            class="card-img-top"
            src="@/assets/eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title beerTagline">{{ item }}</h5>
          </div>
        </div>
      </div>
    </div>
    <!-- Brewers tips -->
    <div class="mt-2 mb-4 marginsContainer">
      <h5 class="mt-4 mb-4 workSansB">Brewers tips</h5>
      <div class="row">
        <div class="col-2">
          <i class="bi bi-person-circle"></i>
        </div>
        <div class="col-10 descriptionSmall">
          <p>{{ beerLocal.brewers_tips }}</p>
          <small class="beerTagline">{{ beerLocal.contributed_by }}</small>
        </div>
      </div>
    </div>
    <PrevButton />
    <Footer />
  </div>
</template>

<script src="@/scripts/beer.js"></script>

<style src="@/styles/style.css"></style>
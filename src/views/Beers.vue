<template>
  <HeaderList />
  <div class="container">
    <div class="mb-4 introMsg">
      Welcome to Deale's party beer guide.
      <br>
      Choose your favourite one and join us!
    </div>
    <h1 class="mb-3 text-center titleBeersPage">List of beers</h1>
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
                <p class="card-text beerTaglineIntro">
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

<script src="@/scripts/beers.js"></script>

<style src="@/styles/style.css"></style>
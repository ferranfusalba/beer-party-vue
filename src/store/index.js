import { createStore } from "vuex";

export default createStore({
  state: {
    beers: [],
  },
  mutations: {
    fillBeers(state, beersInAction) {
      state.beers = beersInAction;
    },
  },
  actions: {
    getBeers: async function ({ commit }) {
      const data = await fetch("https://api.punkapi.com/v2/beers");
      const beers = await data.json();
      commit("fillBeers", beers);
    },
  },
  modules: {},
});

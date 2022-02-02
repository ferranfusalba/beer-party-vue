import HeaderBeer from "@/components/HeaderBeer.vue";
import Footer from "@/components/Footer.vue";
import Tag from "@/components/Tag.vue";
import Popper from "vue3-popper";

export default {
    name: "Beer",
    components: {
        HeaderBeer,
        Footer,
        Tag,
        Popper,
    },
    data() {
        return {
            beerLocal: {
                volume: {},
                boil_volume: {},
                method: {
                    mash_temp: [{
                        temp: {},
                    }, ],
                    fermentation: {
                        temp: {},
                    },
                    twist: "",
                },
                ingredients: {
                    malt: [{
                        name: "",
                        amount: {},
                    }, ],
                    hops: [{
                        name: "",
                        amount: {},
                        add: "",
                        attribute: "",
                    }, ],
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
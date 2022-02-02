import HeaderList from "@/components/HeaderList.vue";
import Tag from "@/components/Tag.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "Beers",
    components: {
        HeaderList,
        Tag,
        Footer,
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
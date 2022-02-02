export default {
    name: "GoBack",
    data() {
        return {
            msgButton: "Back",
        }
    },
    methods: {
        previous() {
            this.$router.go(-1)
        }
    }
}
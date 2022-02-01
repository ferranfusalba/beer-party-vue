<template>
    <button class="btn btn-sm bg-2a workSans" @click="previous">{{msgButton}}</button>
</template>

<script>
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
</script>

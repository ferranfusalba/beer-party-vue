<template>
  <div :class="tagStyle" class="tagCommonStyle">
    <small>{{tagName}} {{tagData}}</small>
  </div>
</template>

<script>
export default {
    name: "Tag",
    props: ["tagName", "tagStyle", "tagData"]
}
</script>

<style src="@/styles/style.css"></style>
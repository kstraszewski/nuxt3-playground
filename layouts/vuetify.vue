<template>
  <div class="headline">
    Layout Test vuetify:
    <slot/>
  </div>
</template>
<script lang="ts">

definePageMeta({
  layout: "vuetify",
});
export default defineComponent({

});
</script>
<style scoped lang="scss">
.headline{
  font-size: 40px;
}
</style>

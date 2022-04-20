<template>
  <div>
    <p>Test Page A</p>
    <video autoplay loop muted>
      <source src="@/assets/media/lendi_hero.mp4" type="video/mp4">
    </video>
  </div>
</template>
<script lang="ts" setup>

definePageMeta({
  layout: 'layout-a',
});

</script>
<style scoped lang="scss">
</style>

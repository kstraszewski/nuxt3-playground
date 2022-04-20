<template>
  <div class="headline">
    Test layout B with loaded icons:
    <slot/>
  </div>
</template>
<script lang="ts">
import '@mdi/font/css/materialdesignicons.css'

export default defineComponent({

});
</script>
<style scoped>
.headline{
  font-size: 40px;
}
</style>

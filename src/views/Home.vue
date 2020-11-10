<template>
  <div>
    <!-- <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" /> -->
    <assets-table-components v-if="!isLoading" v-bind:assets="assets"></assets-table-components>
  </div>
</template>

<script>
import AssetsTableComponents from '@/components/AssetsTableComponents';
import api from '@/api';
export default {
  name: '',
  components: { AssetsTableComponents },

  data() {
    return { isLoading: false, assets: [] };
  },

  created() {
    this.isLoading = true;
    api
      .getAssets()
      .then(assests => (this.assets = assests))
      .finally(() => (this.isLoading = false));
  },
};
</script>

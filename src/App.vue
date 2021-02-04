<template>
  <div class="app-container">
    <Default>
      <router-view></router-view>
    </Default>
  </div>
</template>

<script>
import Default from './layouts/Default.vue';

export default {
  name: 'App',
  components: {
    Default,
  },
};
</script>

<style lang="scss">
@import './assets/scss';
</style>

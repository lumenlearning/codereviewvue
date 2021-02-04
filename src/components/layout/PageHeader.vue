<template>
  <header>
    <h1 class="u-margin-none u-padding-sm">{{ getTitle }}</h1>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters({
      getTitle: 'quiz/quizTitle',
    }),
  },
};
</script>

<style lang="scss" scoped>
h1 {
  background-color: $color-ebony-clay;
  color: white;
  font-size: $text-size-up-5;
}
</style>

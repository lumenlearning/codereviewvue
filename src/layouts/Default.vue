<template>
  <PageHeader />
  <main class="u-padding-sm">
    <slot></slot>
  </main>
</template>

<script>
import PageHeader from '@/components/layout/PageHeader.vue';

export default {
  components: {
    PageHeader,
  },
};
</script>

<style lang="scss" scoped></style>

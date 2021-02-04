<template>
  <div class="banner u-padding-sm">
    <SvgIconContainer width="22" height="22" icon-name="Updated" aria-hidden>
      <IconRefresh />
    </SvgIconContainer>
    <p class="u-margin-none u-padding-left-sm">
      <strong class="u-block u-margin-bottom-xs">Updated Study Plan</strong> Your study plan has
      been updated with the sections that need additional work and the sections you're on track
      with.
    </p>
  </div>
</template>

<script>
import SvgIconContainer from './SvgIconContainer.vue';
import IconRefresh from './icons/IconRefresh.vue';

export default {
  components: {
    SvgIconContainer,
    IconRefresh,
  },
};
</script>

<style lang="scss" scoped>
.banner {
  background-color: $color-white-ice;
  display: flex;
}
p {
  font-size: $text-size-down-1;
}
svg {
  color: $color-lumenblue;
}
</style>

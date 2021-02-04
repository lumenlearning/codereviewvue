<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :aria-hidden="ariaHidden"
    role="img"
    :height="height"
    :width="width"
    :viewBox="viewBox"
  >
    <title lang="en">{{ iconName }}</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true,
    },
    iconColor: {
      type: String,
      default: 'currentColor',
    },
    ariaHidden: {
      type: Boolean,
      default: false,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
    width: {
      type: [Number, String],
      default: 18,
    },
    viewBox: {
      type: String,
      default: '0 0 24 24',
    },
  },
};
</script>

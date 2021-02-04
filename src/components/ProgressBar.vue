<template>
  <progress
    :max="max"
    :aria-valuemax="max"
    :aria-valuemin="min"
    :value="value"
    :aria-valuenow="value"
    :aria-labelledby="label"
  >
    <div
      class="progress-bar"
      :aria-valuemax="max"
      :aria-valuemin="min"
      :aria-valuenow="value"
      :aria-labelledby="label"
    >
      <div :style="styleObject"></div>
    </div>
  </progress>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      styleObject: {
        width: this.value + '%',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@mixin default-bar-styles {
  background-color: $color-mystic;
  box-shadow: inset 0 1px 2px 0 $color-regent-gray;
  width: 100%;
}
$bar-color: $color-salem;

progress {
  @include default-bar-styles();
  appearance: none;
  border: none;
  color: $bar-color;
}

progress::-webkit-progress-bar {
  @include default-bar-styles();
}

progress::-webkit-progress-value {
  background-color: $bar-color;
}

progress::-moz-progress-bar {
  background-color: $bar-color;
}

.progress-bar {
  @include default-bar-styles();
  > div {
    background-color: $bar-color;
    height: 100%;
  }
}

progress,
.progress-bar {
  height: 24px;
}
</style>

<template>
  <section class="u-margin-bottom-sm">
    <div class="question-container">
      <fieldset class="u-margin-none u-padding-sm">
        <legend class="u-block u-padding-top-sm">{{ questionData.title }}</legend>
        <label
          v-for="answer in questionData.answers"
          :key="answer"
          class="u-block u-margin-left u-margin-vertical-sm"
        >
          <input type="radio" disabled />
          <span class="u-margin-left-xs">{{ answer.response }}</span>
        </label>
      </fieldset>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    questionData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  border: 1px solid $color-loblolly;
  border-radius: 4px;
  display: flex;
  overflow: hidden;
}
fieldset {
  border: 0;
}
label {
  display: flex;
  line-height: 1.3;
}
input[type='radio'] {
  position: relative;
  top: 2px; // offset line-height of label text
}
</style>

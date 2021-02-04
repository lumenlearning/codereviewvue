<template>
  <section class="u-margin-bottom-sm">
    <div class="question-container">
      <header class="u-padding-sm" :class="isCorrect ? 'is-correct' : 'is-incorrect'">
        <h3 class="u-margin-none">
          <span class="u-sr-only">Question X of Y: </span>{{ isCorrect ? 'Correct' : 'Incorrect' }}
        </h3>
      </header>
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
    <div class="sidebar u-padding-sm">
      <h4 class="sidebar-text u-margin-none">Section</h4>
      <p class="sidebar-text u-margin-bottom">{{ getSkills[0].title }}</p>
      <h4 class="sidebar-text u-margin-none">Skill</h4>
      <p class="sidebar-text">{{ getSkills[0].description }}</p>
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
    skills: {
      type: Array,
      required: true,
    },
  },
  computed: {
    isCorrect() {
      const scoreCorrect = this.questionData.answers.filter(
        (item) => item.score === 100 && item.selected === true,
      );
      return scoreCorrect.length === 1;
    },
    getSkills() {
      return this.skills.filter((item) => item.uuid === this.questionData.skill);
    },
  },
};
</script>

<style lang="scss" scoped>
$border-style: 1px solid $color-loblolly;
$sidebar-width: 240px;
section {
  border: $border-style;
  border-radius: 4px;
  display: flex;
  overflow: hidden;
}
header {
  &.is-correct {
    background-color: $color-peppermint;
    color: $color-jewel;
  }
  &.is-incorrect {
    background-color: $color-chablis;
    color: $color-apple-blossom;
  }
}
h3 {
  font-size: $text-size-base;
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
.question-container {
  width: calc(100% - #{$sidebar-width});
}
.sidebar {
  background-color: $color-concrete;
  border-left: $border-style;
  width: $sidebar-width;
  h4 {
    color: $color-pale-sky;
  }
  &-text {
    font-size: $text-size-down-1;
  }
}
</style>

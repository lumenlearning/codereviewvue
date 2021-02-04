<template>
  <h2>Your Quiz Answers</h2>
  <Question
    v-for="question in data.questions"
    :key="question.id"
    :question-data="question"
    :skills="data.skills"
  />
</template>

<script>
import Question from './Question.vue';
export default {
  components: {
    Question,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font: {
    size: $text-size-up-3;
    weight: 400;
  }
}
</style>

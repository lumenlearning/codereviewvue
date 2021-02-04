<template>
  <h2>Your Score</h2>
  <h3 class="u-margin-top-none u-margin-bottom-lg u-margin-left">{{ getScore }}</h3>
  <QuestionList :data="quizData" />
</template>

<script>
import { mapGetters } from 'vuex';
import QuestionList from '@/components/QuestionList.vue';
export default {
  components: {
    QuestionList,
  },
  data() {
    return {
      quizData: this.$store.state.quiz.quizData,
    };
  },
  computed: {
    ...mapGetters({
      listQuestions: 'quiz/listQuestions',
      countQuestions: 'quiz/countQuestions',
      countCorrect: 'quiz/countCorrect',
      getScore: 'quiz/calcScore',
    }),
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
h3 {
  font-size: $text-size-up-4;
}
</style>

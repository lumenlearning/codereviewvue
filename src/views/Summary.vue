<template>
  <QuestionList :data="quizData" />
</template>

<script>
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
};
</script>

<style lang="scss" scoped></style>

<template>
  <SummaryStats :data="quizData" />
  <QuestionList :data="quizData" />
</template>

<script>
import SummaryStats from '@/components/SummaryStats.vue';
import QuestionList from '@/components/QuestionList.vue';
export default {
  components: {
    SummaryStats,
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

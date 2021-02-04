<template>
  <h2>Summary</h2>
  <div class="summary u-padding-horizontal-sm u-padding-vertical u-margin-bottom-lg">
    <h3 class="u-margin-top-none u-margin-bottom-sm">Your Score</h3>
    <h4 class="u-margin-top-none u-margin-bottom-lg u-margin-left">{{ getScore }}</h4>
    <span class="meta meta--duration">Time Spent: {{ formattedDuration }}</span>
    <SvgIconContainer width="24" height="24" icon-name="Success" aria-hidden>
      <IconCheckmark />
    </SvgIconContainer>
    <span class="grade-details is-graded">
      Score recorded as grade
    </span>
    <span class="meta meta--time">Finished: {{ formattedDate }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SvgIconContainer from './SvgIconContainer.vue';
import IconCheckmark from './icons/IconCheckmark.vue';

export default {
  components: {
    SvgIconContainer,
    IconCheckmark,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      listQuestions: 'quiz/listQuestions',
      countQuestions: 'quiz/countQuestions',
      countCorrect: 'quiz/countCorrect',
      getScore: 'quiz/calcScore',
    }),
    formattedDuration() {
      const durationArray = this.data.timeSpent.split(':');
      const duration = [];
      const labels = ['hrs', 'mins', 'secs'];
      durationArray.forEach((time, i) => {
        time = time.toString();
        duration.push(time + ' ' + labels[i]);
      });
      return duration.join(' ');
    },
    formattedDate() {
      const timeCompleted = new Date(this.data.completed);
      const dateTimeOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      };
      return new Intl.DateTimeFormat('en-US', dateTimeOptions).format(timeCompleted);
    },
  },
};
</script>

<style lang="scss" scoped>
$border-style: 1px solid $color-loblolly;

h2 {
  font: {
    size: $text-size-up-3;
    weight: 400;
  }
}
.summary {
  align-items: center;
  border: $border-style;
  border-radius: 4px;
  display: grid;
  grid-template-areas:
    'title title title title'
    'progressBar stats icon grade'
    'durationMeta . . timeMeta';
  grid-template-columns: 1fr 80px 28px 1fr;
  width: 96%;
}
h3 {
  font: {
    size: $text-size-up-1;
    weight: 400;
  }
  grid-area: title;
}
.grade-details {
  font-size: $text-size-up-1;
}
svg {
  color: $color-salem;
}
.is-graded {
  grid-area: grade;
}
.meta {
  font: {
    size: $text-size-down-1;
    weight: 400;
  }
  margin-top: $spacing-unit-xs;
  &--duration {
    grid-area: durationMeta;
  }
  &--time {
    grid-area: timeMeta;
  }
}
</style>

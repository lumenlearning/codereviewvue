import { createStore } from 'vuex';

import quiz, { QuizStateInterface } from './modules/quiz';

export interface StateInterface {
  quiz: QuizStateInterface;
}

export default createStore({
  modules: {
    quiz,
  },
});

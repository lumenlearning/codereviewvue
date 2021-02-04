import json from '@/data/quiz.json';
import quiz, { QuizStateInterface } from '@/store/modules/quiz';

// mock state
const quizData = json;

const state: QuizStateInterface = { quizData };

describe('quiz getters', () => {
  it('countCorrect', () => {
    const result = quiz.getters.countCorrect(state);
    expect(result).toEqual(3);
  });
  it('calcScore', () => {
    const result = quiz.getters.calcScore(state);
    expect(result).toEqual('42%');
  });
});

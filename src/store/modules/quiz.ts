import { GetterTree } from 'vuex';
import { Quiz, Skill, Question, Answer } from '../models/quiz';
import { StateInterface } from '..';

// import data
import json from '@/data/quiz.json';

export interface QuizStateInterface {
  quizData: Quiz;
  skill?: Skill;
  question?: Question;
  answer?: Answer;
}

// initial state
const state = () => ({
  quizData: json,
});

// getters
type Getters = {
  quizTitle(state: QuizStateInterface): Quiz['title'];
  listQuestions(state: QuizStateInterface): Quiz['questions'];
  countQuestions(state: QuizStateInterface): number;
  countCorrect(state: QuizStateInterface): number;
  calcScore(state: QuizStateInterface): number;
};

const getters: GetterTree<QuizStateInterface, StateInterface> & Getters = {
  quizTitle(state) {
    return state.quizData.title;
  },
  listQuestions(state) {
    return state.quizData.questions;
  },
  countQuestions(state) {
    return state.quizData.questions.length;
  },
  countCorrect(state) {
    const questions = getters.listQuestions(state);
    const correctAnswers = [];
    questions.forEach((question) => {
      const scoreCorrect = question.answers.filter(
        (item) => item.score === 100 && item.selected === true,
      );
      if (scoreCorrect && scoreCorrect.length === 1) {
        correctAnswers.push(scoreCorrect);
      }
    });
    return correctAnswers.length;
  },
  calcScore(state) {
    const totalQ = getters.countQuestions(state);
    const correctQ = getters.countCorrect(state);
    const score = (correctQ / totalQ) * 100;
    return Math.floor(score);
  },
};

// actions
const actions = {};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

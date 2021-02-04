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
const getters = {};

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

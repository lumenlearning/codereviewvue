import { mount } from '@vue/test-utils';
import QuestionList from '@/components/QuestionList.vue';

describe('QuestionList.vue', () => {
  it('renders all the quiz questions', async () => {
    const wrapper = mount(QuestionList, {
      props: {
        data: {
          title: 'Economics Quiz',
          completed: '2020-03-24T16:30:00Z',
          timeSpent: '00:10:26',
          bestScore: true,
          skills: [
            {
              title: 'What is Economics?',
              description: 'Explain what economics is and why it’s important',
              uuid: '414b6a4e-68bf-4345-a4d9-5089dfcf071e',
            },
            {
              title: 'Math in Economics',
              description: 'Use mathematics in common economic applications',
              uuid: '43a44ed1-adeb-4fb4-a768-24c5027ae497',
            },
            {
              title: 'Graphs in Economics',
              description: 'Use graphs in common economic applications',
              uuid: 'be769fa3-ed0e-4a58-bf47-025e281e677a',
            },
          ],
          questions: [
            {
              title: 'What is one of the benefits of specialization in labor?',
              skill: '414b6a4e-68bf-4345-a4d9-5089dfcf071e',
              answers: [
                {
                  response:
                    'It allows workers to focus on the overall big picture production process of a product or service.',
                  score: 0,
                  selected: true,
                },
                {
                  response:
                    'Specialized workers are more productive when producing a combination of things or tasks with which they are good at and some of which they are not.',
                  score: 0,
                  selected: false,
                },
                {
                  response:
                    'Workers who specialize in certain tasks often learn to produce more quickly and with higher quality.',
                  score: 100,
                  selected: false,
                },
              ],
            },
            {
              title:
                'An analysis of unemployment rates of the countries in North America since 2008 is an application of:',
              skill: '414b6a4e-68bf-4345-a4d9-5089dfcf071e',
              answers: [
                { response: 'microeconomics.', score: 0, selected: false },
                { response: 'financial economics.', score: 0, selected: false },
                { response: 'macroeconomics.', score: 100, selected: true },
              ],
            },
            {
              title: 'Which of the following items is not scarce?',
              skill: '414b6a4e-68bf-4345-a4d9-5089dfcf071e',
              answers: [
                { response: 'money', score: 0, selected: false },
                { response: 'land', score: 0, selected: true },
                { response: 'air', score: 100, selected: false },
              ],
            },
            {
              title:
                'If a data line on a graph slopes upward as it goes to the right, it is depicting that',
              skill: 'be769fa3-ed0e-4a58-bf47-025e281e677a',
              answers: [
                {
                  response: 'the relationship between the variables on the axes is inverse.',
                  score: 0,
                  selected: true,
                },
                {
                  response:
                    'as the value of one variable falls, the value of the other rises (all else constant).',
                  score: 0,
                  selected: false,
                },
                {
                  response: 'the relationship between the variables on the axes is direct.',
                  score: 100,
                  selected: false,
                },
              ],
            },
            {
              title:
                'In the case of an negative relationship between two variables, all else remaining constant',
              skill: 'be769fa3-ed0e-4a58-bf47-025e281e677a',
              answers: [
                {
                  response: 'the values of the two variables will move in the same direction.',
                  score: 0,
                  selected: false,
                },
                {
                  response:
                    'graphically, the data line representing the relationship between the variables has a positive slope.',
                  score: 0,
                  selected: true,
                },
                {
                  response:
                    'the value of the two variables will move in opposite directions from each other.',
                  score: 100,
                  selected: false,
                },
              ],
            },
            {
              title:
                'If an economist is trying to predict the outcome from particular causes and effects, what is the best tool(s) for her to use in order to test out her economic model?',
              skill: '43a44ed1-adeb-4fb4-a768-24c5027ae497',
              answers: [
                { response: 'environmental absolutes', score: 0, selected: false },
                { response: 'dialectic dialogue', score: 0, selected: false },
                { response: 'mathematical functions', score: 100, selected: true },
              ],
            },
            {
              title:
                'In order to calculate an economic equation to understand its economic implications, what must one remember to do?',
              skill: '43a44ed1-adeb-4fb4-a768-24c5027ae497',
              answers: [
                {
                  response: 'Start with the last variable of the equation.',
                  score: 0,
                  selected: false,
                },
                { response: 'Multiply and divide from right to left.', score: 0, selected: false },
                { response: 'Follow the correct order of operations.', score: 100, selected: true },
              ],
            },
          ],
        },
      },
    } as any); // eslint-disable-line @typescript-eslint/no-explicit-any
    expect(wrapper.findAll('.question-container')).toHaveLength(7);
  });
});

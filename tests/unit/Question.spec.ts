import { shallowMount } from '@vue/test-utils';
// import store from '@/store/index';
import Question from '@/components/Question.vue';

let wrapper: any; // eslint-disable-line @typescript-eslint/no-explicit-any

beforeEach(() => {
  wrapper = shallowMount(Question, {
    props: {
      questionData: {
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
    },
  } as any); // eslint-disable-line @typescript-eslint/no-explicit-any
});

afterEach(() => {
  wrapper.unmount();
});

describe('Question.vue', () => {
  it('renders a question', async () => {
    expect(wrapper.text()).toContain('What is one of the benefits of specialization in labor?');
  });

  it('renders disabled responses', async () => {
    expect(wrapper.find('input').attributes()).toEqual({
      type: 'radio',
      disabled: '',
    });
  });

  it('renders the correct skill', async () => {
    expect(wrapper.find('.sidebar').text()).toContain('What is Economics?');
  });

  it('renders a header identifying a correct answer', async () => {
    // Initial props sent specify a question answered incorrectly,
    // so we need to set new props here
    await wrapper.setProps({
      questionData: {
        title: 'What is one of the benefits of specialization in labor?',
        skill: '414b6a4e-68bf-4345-a4d9-5089dfcf071e',
        answers: [
          {
            response:
              'It allows workers to focus on the overall big picture production process of a product or service.',
            score: 0,
            selected: false,
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
            selected: true,
          },
        ],
      },
    });

    expect(wrapper.find('.question-container header').text()).toContain('Correct');
  });

  it('renders a header identifying an incorrect answer', async () => {
    expect(wrapper.find('.question-container header').text()).toContain('Incorrect');
  });
});

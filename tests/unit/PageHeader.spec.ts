import { shallowMount } from '@vue/test-utils';
import store from '@/store/index';
import PageHeader from '@/components/layout/PageHeader.vue';

describe('PageHeader.vue', () => {
  it('renders quiz title', async () => {
    const wrapper = shallowMount(PageHeader, {
      global: {
        plugins: [store],
      },
    });
    const title = 'Economics Quiz';
    expect(wrapper.text()).toMatch(title);
  });
});

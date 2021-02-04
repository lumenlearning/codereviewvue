import { shallowMount } from '@vue/test-utils';
import BannerSPUpdated from '@/components/BannerSPUpdated.vue';

describe('BannerSPUpdated.vue', () => {
  it('renders study plan banner', async () => {
    const wrapper = shallowMount(BannerSPUpdated);
    const content = 'Updated Study Plan';
    expect(wrapper.text()).toMatch(content);
  });
});

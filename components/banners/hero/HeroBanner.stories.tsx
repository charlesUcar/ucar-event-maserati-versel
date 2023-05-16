import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeroBanner, { IHeroBanner } from './HeroBanner';
import { mockHeroBannerProps } from './HeroBanner.mocks';

export default {
  title: 'layouts/HeroBanner',
  component: HeroBanner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HeroBanner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeroBanner> = (args) => (
  <HeroBanner {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHeroBannerProps.base,
} as IHeroBanner;

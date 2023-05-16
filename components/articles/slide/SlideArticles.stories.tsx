import { ComponentMeta, ComponentStory } from '@storybook/react';
import SlideArticles, { ISlideArticles } from './SlideArticles';
import { mockSlideArticlesProps } from './SlideArticles.mocks';

export default {
  title: 'cards/SlideArticles',
  component: SlideArticles,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SlideArticles>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SlideArticles> = (args) => (
  <SlideArticles {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSlideArticlesProps.base,
} as ISlideArticles;

import { ComponentMeta, ComponentStory } from '@storybook/react';
import LatestArticles, { ILatestArticles } from './LatestArticles';
import { mockLatestArticlesProps } from './LatestArticles.mocks';

export default {
  title: 'cards/LatestArticles',
  component: LatestArticles,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LatestArticles>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LatestArticles> = (args) => (
  <LatestArticles {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLatestArticlesProps.base,
} as ILatestArticles;

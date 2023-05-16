import { ComponentMeta, ComponentStory } from '@storybook/react';
import LastestArticles, { ILastestArticles } from './LastestArticles';
import { mockLastestArticlesProps } from './LastestArticles.mocks';

export default {
  title: 'cards/LastestArticles',
  component: LastestArticles,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LastestArticles>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LastestArticles> = (args) => (
  <LastestArticles {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLastestArticlesProps.base,
} as ILastestArticles;

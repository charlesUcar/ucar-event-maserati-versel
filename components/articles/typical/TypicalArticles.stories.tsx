import { ComponentMeta, ComponentStory } from '@storybook/react';
import TypicalArticles, { ITypicalArticles } from './TypicalArticles';
import { mockTypicalArticlesProps } from './TypicalArticles.mocks';

export default {
  title: 'cards/TypicalArticles',
  component: TypicalArticles,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TypicalArticles>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TypicalArticles> = (args) => (
  <TypicalArticles {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTypicalArticlesProps.base,
} as ITypicalArticles;

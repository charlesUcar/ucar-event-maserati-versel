import { ComponentMeta, ComponentStory } from '@storybook/react';
import VideoArticles, { IVideoArticles } from './VideoArticles';
import { mockVideoArticlesProps } from './VideoArticles.mocks';

export default {
  title: 'cards/VideoArticles',
  component: VideoArticles,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof VideoArticles>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VideoArticles> = (args) => (
  <VideoArticles {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockVideoArticlesProps.base,
} as IVideoArticles;

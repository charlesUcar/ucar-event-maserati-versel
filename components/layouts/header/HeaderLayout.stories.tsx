import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeaderLayout, { IHeaderLayout } from './HeaderLayout';
import { mockHeaderLayoutProps } from './HeaderLayout.mocks';

export default {
  title: 'layouts/HeaderLayout',
  component: HeaderLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HeaderLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeaderLayout> = (args) => (
  <HeaderLayout {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHeaderLayoutProps.base,
} as IHeaderLayout;

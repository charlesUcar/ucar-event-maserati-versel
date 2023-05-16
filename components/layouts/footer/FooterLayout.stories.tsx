import { ComponentMeta, ComponentStory } from '@storybook/react';
import FooterLayout, { IFooterLayout } from './FooterLayout';
import { mockFooterLayoutProps } from './FooterLayout.mocks';

export default {
  title: 'layouts/FooterLayout',
  component: FooterLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FooterLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FooterLayout> = (args) => (
  <FooterLayout {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFooterLayoutProps.base,
} as IFooterLayout;

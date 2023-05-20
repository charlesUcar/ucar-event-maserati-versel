import { IStoryArticles } from './StoryArticles';

const base: IStoryArticles = {
  mainTitle: 'SlideArticlesMainTitle',
  articles: [
    {
      id: 123,
      title: 'title',
      summary: 'summary',
      category: 123,
      date: 'date',
    },
  ],
};

export const mockStoryArticlesProps = {
  base,
};

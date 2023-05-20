import { ISlideArticles } from './SlideArticles';

const base: ISlideArticles = {
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

export const mockSlideArticlesProps = {
  base,
};

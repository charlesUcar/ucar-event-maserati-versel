import { IVideoArticles } from './VideoArticles';

const base: IVideoArticles = {
  mainTitle: 'SlideArticlesMainTitle',
  articles: [
    {
      id: 123,
      title: 'title',
      summary: 'summary',
      ytId: '123',
      date: 'date',
    },
  ],
};

export const mockVideoArticlesProps = {
  base,
};

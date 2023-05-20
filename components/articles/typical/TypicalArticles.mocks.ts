import { ITypicalArticles } from './TypicalArticles';

const base: ITypicalArticles = {
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

export const mockTypicalArticlesProps = {
  base,
};

import axios from 'axios';
import FooterLayout from '../../../components/layouts/footer/FooterLayout';
import HeaderLayout from '../../../components/layouts/header/HeaderLayout';
import PrimaryLayout from '../../../components/layouts/primary/PrimaryLayout';
import ArticleTemplate from '../../../components/templates/article/ArticleTemplate';
import { NextPageWithLayout } from '../../page';

export async function getStaticProps({ params }: any) {
  const articleCateGory = params.category;
  const articleId = params.articleId;
  try {
    const { data, status } = await axios.get(
      `http://api.mediabrilliance.com/api/article/getarticle?articleid=${articleId}&platform=1&category=${articleCateGory}`
    );
    if (status !== 200) {
      throw new Error(status.toString());
    }
    return {
      props: {
        articleData: data,
        fetchStatus: 'success',
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        articleData: null,
        fetchStatus: error,
      },
    };
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};

export interface IArticle {
  articleData?: any;
}

const Article: NextPageWithLayout<IArticle> = ({ articleData }) => {
  return (
    <div className="row article-page">
      <main className="home">
        <ArticleTemplate articleData={articleData} />
      </main>
    </div>
  );
};

export default Article;

Article.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <HeaderLayout position="article" />
      {page}
      <FooterLayout />
    </PrimaryLayout>
  );
};
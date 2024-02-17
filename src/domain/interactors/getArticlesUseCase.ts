import { ArticleRepository } from "../repository/articleRepository";

type GetTrendingArticlesUseCase = Pick<ArticleRepository, 'getTrendingArticles'>;
type GetLocalArticlesUseCase = Pick<ArticleRepository, 'getLocalArticles'>;

export const getTrendingArticlesUseCase = (repository: GetTrendingArticlesUseCase) => {
    repository.getTrendingArticles();
}

export const getLocalArticlesUseCase = (repository: GetLocalArticlesUseCase) => {
    repository.getLocalArticles();
}
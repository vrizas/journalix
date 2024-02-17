import { ArticleRepository } from "../repository/articleRepository";

type LoadMoreTrendingArticlesUseCase = Pick<ArticleRepository, 'loadMoreTrendingArticles'>;
type LoadMoreLocalArticlesUseCase = Pick<ArticleRepository, 'loadMoreLocalArticles'>;

export const loadMoreTrendingArticlesUseCase = (repository: LoadMoreTrendingArticlesUseCase) => {
    repository.loadMoreTrendingArticles();
}

export const loadMoreLocalArticlesUseCase = (repository: LoadMoreLocalArticlesUseCase) => {
    repository.loadMoreLocalArticles();
}
import { getLocalArticlesUseCase, getTrendingArticlesUseCase } from "../../../domain/interactors/getArticlesUseCase"
import { loadMoreLocalArticlesUseCase, loadMoreTrendingArticlesUseCase } from "../../../domain/interactors/loadMoreArticlesUseCase";
import { ArticleRepository } from "../../../domain/repository/articleRepository"
import { useCallback } from "react"

export const useArticleViewModel = (repository: ArticleRepository) => {
    const getTrendingArticles = useCallback(async () => {
        getTrendingArticlesUseCase({
            getTrendingArticles: repository.getTrendingArticles
        })
    }, [repository.getTrendingArticles]);

    const getLocalArticles = useCallback(async () => {
        getLocalArticlesUseCase({
            getLocalArticles: repository.getLocalArticles
        })
    }, [repository.getLocalArticles]);

    const loadMoreTrendingArticles = useCallback(async () => {
        loadMoreTrendingArticlesUseCase({
            loadMoreTrendingArticles: repository.loadMoreTrendingArticles
        })
    }, [repository.loadMoreTrendingArticles]);

    const loadMoreLocalArticles = useCallback(async () => {
        loadMoreLocalArticlesUseCase({
            loadMoreLocalArticles: repository.loadMoreLocalArticles
        })
    }, [repository.loadMoreLocalArticles]);

    return {
        trendingArticles: repository.trendingArticles,
        isTrendingLoading: repository.isTrendingLoading,
        isLoadTrendingMore: repository.isLoadTrendingMore,
        getTrendingArticles,
        loadMoreTrendingArticles,
        localArticles: repository.localArticles,
        isLocalLoading: repository.isLocalLoading,
        isLoadLocalMore: repository.isLoadLocalMore,
        getLocalArticles,
        loadMoreLocalArticles,
    }
}
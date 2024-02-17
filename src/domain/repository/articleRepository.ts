import { Article } from "../entity/articleEntity";

export interface ArticleRepository {
    trendingPage: number;
    trendingArticles: Article[];
    isTrendingLoading: boolean;
    isLoadTrendingMore: boolean;
    getTrendingArticles: () => void;
    loadMoreTrendingArticles: () => void;
    localPage: number;
    localArticles: Article[];
    isLocalLoading: boolean;
    isLoadLocalMore: boolean;
    getLocalArticles: () => void;
    loadMoreLocalArticles: () => void;
}
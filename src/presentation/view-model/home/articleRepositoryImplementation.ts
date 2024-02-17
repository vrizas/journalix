import { getArticles } from "@data/articleApi";
import { Article } from "@domain/entity/articleEntity";
import { ArticleRepository } from "@domain/repository/articleRepository";
import { useCallback, useState } from "react";

export const useArticleRepositoryImplementation = (): ArticleRepository => {
    const [trendingPage, setTrendingPage] = useState<number>(1);
    const [isLastTrendingPage, setIsLastTrendingPage] = useState<boolean>(false);
    const [trendingArticles, setTrendingArticles] = useState<Article[]>([]);
    const [isTrendingLoading, setIsTrendingLoading] = useState<boolean>(false);
    const [isLoadTrendingMore, setIsLoadTrendingMore] = useState<boolean>(false);
    const [localPage, setLocalPage] = useState<number>(1);
    const [isLastLocalPage, setIsLastLocalPage] = useState<boolean>(false);
    const [localArticles, setLocalArticles] = useState<Article[]>([]);
    const [isLocalLoading, setIsLocalLoading] = useState<boolean>(false);
    const [isLoadLocalMore, setIsLoadLocalMore] = useState<boolean>(false);

    const getTrendingArticles = useCallback(async () => {
        try {
            setIsTrendingLoading(true);
            const response = await getArticles({
                page: 1,
                pageSize: 5,
                country: 'us',
            });

            setTrendingArticles(response);
        } catch (error) {
            alert((error as { message: string })?.message || 'Failed to fetch news');
        } finally {
            setIsTrendingLoading(false);
        }
    }, []);

    const getLocalArticles = useCallback(async () => {
        try {
            setIsLocalLoading(true);
            const response = await getArticles({
                page: 1,
                pageSize: 6,
                country: 'id',
            });

            setLocalArticles(response);
        } catch (error) {
            alert((error as { message: string })?.message || 'Failed to fetch news');
        } finally {
            setIsLocalLoading(false);
        }
    }, []);

    const loadMoreTrendingArticles = useCallback(async () => {
        try {
            if (isLastTrendingPage) {
                return;
            }

            setIsLoadTrendingMore(true);
            setTrendingPage((prev) => prev + 1);
            const response = await getArticles({
                page: trendingPage,
                pageSize: 5,
                country: 'us',
            });

            if (response?.length === 0) {
                setIsLastTrendingPage(true);
            }

            setTrendingArticles((prev) => [...prev, ...response]);
        } catch (error) {
            alert((error as { message: string })?.message || 'Failed to fetch news');
        } finally {
            setIsLoadTrendingMore(false);
        }
    }, [trendingPage, isLastTrendingPage]);

    const loadMoreLocalArticles = useCallback(async () => {
        try {
            if (isLastLocalPage) {
                return;
            }

            setIsLoadLocalMore(true);
            setLocalPage((prev) => prev + 1);
            const response = await getArticles({
                page: localPage,
                pageSize: 3,
                country: 'id',
            });

            if (response?.length === 0) {
                setIsLastLocalPage(true);
            }

            setLocalArticles((prev) => [...prev, ...response]);
        } catch (error) {
            alert((error as { message: string })?.message || 'Failed to fetch news');
        } finally {
            setIsLoadLocalMore(false);
        }
    }, [localPage, isLastLocalPage]);

    return {
        trendingPage,
        trendingArticles,
        isTrendingLoading,
        isLoadTrendingMore,
        getTrendingArticles,
        loadMoreTrendingArticles,
        localPage,
        localArticles,
        isLocalLoading,
        isLoadLocalMore,
        getLocalArticles,
        loadMoreLocalArticles,
    }
}
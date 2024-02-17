import { Article } from "../entity/articleEntity";

export const combineArticles = (articles: Article[], newArticles: Article[]): Article[] => {
    return [...articles, ...newArticles];
}

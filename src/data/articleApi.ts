import { Article } from "@domain/entity/articleEntity";

const API_KEY = import.meta.env.VITE_API_KEY;

export const getArticles = async ({
  page = 1,
  pageSize = 3,
  country = 'us',
}): Promise<Article[]> => {
  try {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&pageSize=${pageSize}`, {
          headers: {
              'X-Api-Key': API_KEY,
          },
      });
      const data = await response.json();
      return data.articles;
  } catch (error) {
      const errorMessage = (error as { message: string })?.message || 'Failed to fetch news';
      throw new Error(errorMessage);
  }
}
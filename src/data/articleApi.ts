import { Article } from "../domain/entity/articleEntity";

const API_KEY = 'e6c1bf1282d74345b955c66b1c1d07eb';

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
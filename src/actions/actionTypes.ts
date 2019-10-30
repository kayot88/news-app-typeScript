import {
  LOAD_NEWS,
  ADD_NEWS,
  REMOVE_NEWS,
  EDIT_NEWS,
  MARK_AS_READ,
  ADD_TO_FAVORITES,
  ADD_TO_READ_LATER,
  RATE_ARTICLE,
  ADD_COMMENT,
  ADD_COMPLAIN
} from '../constants/actionsConstants';
import { Article } from '../entities/Article';
import { ArticleActionType } from './actionTypes';

export interface ActionTypeBase {
  type: string;
}

export interface NewsActionType extends ActionTypeBase {
  id?: string;
  article?: Article;
}

export interface ArticleActionType extends ActionTypeBase {
  id?: string;
  rate?: number;
  comment?: string;
  complain?: string;
}

export const loadNews = (): NewsActionType => {
  return {
    type: LOAD_NEWS
  };
};
//newsActions
export const addNews = (article: Article): NewsActionType => {
  return {
    type: ADD_NEWS,
    article
  };
};
export const removeNews = (id: string): NewsActionType => {
  return {
    type: REMOVE_NEWS,
    id
  };
};
export const editNews = (article: Article): NewsActionType => {
  return {
    type: EDIT_NEWS,
    article
  };
};
// articlesActions
export const markAsRead = (id: string): ArticleActionType => {
  return {
    type: MARK_AS_READ,
    id
  };
};
export const addToFavorites = (id: string): ArticleActionType => {
  return {
    type: ADD_TO_FAVORITES,
    id
  };
};
export const addToReadLater = (id: string): ArticleActionType => {
  return {
    type: ADD_TO_READ_LATER,
    id
  };
};
export const rateArticle = (id: string, rate: number): ArticleActionType => {
  return {
    type: RATE_ARTICLE,
    id
  };
};
export const addComent = (id: string, comment: string): ArticleActionType => {
  return {
    type: ADD_COMMENT,
    id,
    comment
  };
};
export const addComplain = (
  id: string,
  complain: string
): ArticleActionType => {
  return {
    type: ADD_COMPLAIN,
    id,
    complain
  };
};


export interface IArticle {
  response?: IResponse
}

export interface IResponse {
  status?: string;
  currentPage?: number;
  orderBy?: string
  page?: number;
  results?: ResultsArray;
  startIndex?: number;
  total?: number;
  userTier?: string;
}

export interface ResultsArray  {
  id?: string;
  type?: string;
  webPublicationDate?: string;
  webTitle?: string;
  webUrl?: string;
  apiUrl?: string;
  isHosted?: boolean;
  pillarId?: string;
  pillarName?: string;
}


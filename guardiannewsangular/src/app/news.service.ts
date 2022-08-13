import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs';
import { IArticle } from 'src/interfaces/IArticle.interface';
import { API_KEY } from './modules/secrets.module';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private url = `https://content.guardianapis.com/search?api-key=${API_KEY}`;

  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get<IArticle>(this.url)
    .pipe(map(res => res.response));
    }
}

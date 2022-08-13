import { Component } from '@angular/core';
import { NewsService } from '../news.service';




@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent {

  newsArticles: any;


  constructor(public newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getPosts()
      .subscribe(response => {
        this.newsArticles = response?.results
        console.log('newsArticles', this.newsArticles)
      });
  }
}


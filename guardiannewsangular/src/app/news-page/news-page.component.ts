import { Component } from '@angular/core';




@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent {

  newsArticles: any;

  test: string = 'News home page';


  constructor() {}

  ngOnInit() {

  }
}


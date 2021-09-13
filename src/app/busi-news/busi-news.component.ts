import { Component, OnInit } from '@angular/core';
import { NewsApiServiceService } from '../services/news-api-service.service';

@Component({
  selector: 'app-busi-news',
  templateUrl: './busi-news.component.html',
  styleUrls: ['./busi-news.component.css']
})
export class BusiNewsComponent implements OnInit {

  constructor(private apiService:NewsApiServiceService) { }

  allNews:any = [];

  ngOnInit(): void {
    this.apiService.topHeadingBusiTR().subscribe((result) => {
      console.log(result)
      this.allNews = result.articles
    })
  }

}

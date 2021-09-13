import { Component, OnInit } from '@angular/core';
import { NewsApiServiceService } from '../services/news-api-service.service';

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})
export class SportsNewsComponent implements OnInit {

  constructor(private apiService:NewsApiServiceService) { }

  allNews:any = []

  ngOnInit(): void {
    this.apiService.topHeadingSportsTR().subscribe((result) => {
      console.log(result)
      this.allNews = result.articles
    })
  }

}

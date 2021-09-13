import { Component, OnInit } from '@angular/core';
import { NewsApiServiceService } from '../services/news-api-service.service';
@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  constructor(private apiService:NewsApiServiceService) { }

  allNews:any = [];

  ngOnInit(): void {
    this.apiService.topHeadingTechTR().subscribe((result) => {
      console.log(result)
      this.allNews = result.articles
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { NewsApiServiceService } from '../services/news-api-service.service';

@Component({
  selector: 'app-health-news',
  templateUrl: './health-news.component.html',
  styleUrls: ['./health-news.component.css']
})
export class HealthNewsComponent implements OnInit {

  constructor(private apiService:NewsApiServiceService) { }

  allNews:any = []

  ngOnInit(): void {
    this.apiService.topHeadingHealthTR().subscribe((result) => {
      console.log(result)
      this.allNews = result.articles
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { NewsApiServiceService } from '../services/news-api-service.service';

@Component({
  selector: 'app-science-news',
  templateUrl: './science-news.component.html',
  styleUrls: ['./science-news.component.css']
})
export class ScienceNewsComponent implements OnInit {

  constructor(private apiService:NewsApiServiceService) { }

  allNews:any = []

  ngOnInit(): void {
    this.apiService.topHeadingScienceTR().subscribe((result) => {
      console.log(result)
      this.allNews = result.articles
    })
  }

}

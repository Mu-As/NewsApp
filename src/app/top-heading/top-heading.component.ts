import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NewsApiServiceService } from '../services/news-api-service.service';

@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnInit {

  constructor(private apiService:NewsApiServiceService) { }

  //News
  allNews:any = [];

  ngOnInit(): void {
    this.apiService.topHeadingTurkey().subscribe((result) => {
      console.log(result)
      this.allNews = result.articles
    })
  }

}

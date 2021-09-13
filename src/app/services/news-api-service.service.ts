import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiServiceService {

  constructor(private http:HttpClient) { }

  //haberlerin geldiği api url'i
  newsApiTurkey = "https://newsapi.org/v2/top-headlines?country=tr&apiKey=ec98da18eff74f1eac00a00b49c6bbbf"
  newsApiTechTR = "https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=ec98da18eff74f1eac00a00b49c6bbbf"
  newsApiBusiTR = "https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=ec98da18eff74f1eac00a00b49c6bbbf"
  newsApiHealthTR = "https://newsapi.org/v2/top-headlines?country=tr&category=health&apiKey=ec98da18eff74f1eac00a00b49c6bbbf"
  newsApiSportsTR = "https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=ec98da18eff74f1eac00a00b49c6bbbf"
  newsApiScienceTR = "https://newsapi.org/v2/top-headlines?country=tr&category=science&apiKey=ec98da18eff74f1eac00a00b49c6bbbf"

  //üst başlıkları getiren fonksiyon
  topHeadingTurkey():Observable<any>{
    return this.http.get(this.newsApiTurkey)
  }
  topHeadingTechTR():Observable<any>{
    return this.http.get(this.newsApiTechTR)
  }
  topHeadingBusiTR():Observable<any>{
    return this.http.get(this.newsApiBusiTR)
  }
  topHeadingHealthTR():Observable<any>{
    return this.http.get(this.newsApiHealthTR)
  }
  topHeadingSportsTR():Observable<any>{
    return this.http.get(this.newsApiSportsTR)
  }
  topHeadingScienceTR():Observable<any>{
    return this.http.get(this.newsApiScienceTR)
  }
}

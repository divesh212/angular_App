import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  urlForGlobalFeed : string
  urlForTagFeed : string 
  articles = new Subject()
  baseUrl: string

  constructor(private http: HttpClient) { 
    this.baseUrl = "https://conduit.productionready.io/api/articles/"
    this.urlForGlobalFeed = this.baseUrl
    this.urlForTagFeed = this.baseUrl +"?tag="
  }

  getFeed() {
    return this.articles
  }

  setGlobalFeed() {
    this.http.get(this.urlForGlobalFeed).subscribe((data) => {
      	this.articles.next(data)
    })
  }

  getFeedByTag(currentTag : string) {
    const url = this.urlForTagFeed + currentTag
    this.articles.next(this.http.get(url))

    this.http.get(url).subscribe((data) => {
      this.articles.next(data)
   })
  }

  setUserFeed(){
    
  }

}

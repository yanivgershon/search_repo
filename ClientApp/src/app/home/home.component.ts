import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISearchResult, SearchResult } from '../data/search-result'
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit
{
  baseApiUrl = "https://api.github.com/search/repositories?q="
  results: ISearchResult[];
  search_term: string;
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void
  {
     
  }
  search_repos() {
    this.get_repos().subscribe(data => {
      this.results = [];
      for (let i = 0; i < data.items.length; i++) {
        let item = data.items[i];
        this.results.push(new SearchResult(item.name, item.owner.avatar_url))
      }
      console.log('data' + data);
      
    });
  }

  get_repos(): Observable<any> {
 
    return this.http.get(this.baseApiUrl + this.search_term);
  }
  
  }



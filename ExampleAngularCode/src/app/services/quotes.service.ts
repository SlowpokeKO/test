import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Quote } from '../models/quote'

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  constructor(private http: HttpClient) { }

  private apiUrl: string = 'https://api.api-ninjas.com/v1/quotes?category='
  private key = '+wrYCFDJ9mbskSJ+wsFGjA==XayQpSBYkqipBbXq'
  private header = new HttpHeaders({'x-api-key': this.key})

  fetchQuote(category: any): any {
    return this.http.get<Quote>(this.apiUrl + category, {headers: this.header})
  }
}

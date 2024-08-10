import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { QuotesService } from '../../services/quotes.service';
import { Quote } from '../../models/quote'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  categories = ['age',
    'alone',
    'amazing',
    'anger',
    'architecture',
    'art',
    'attitude',
    'beauty',
    'best',
    'birthday',
    'business',
    'car',
    'change',
    'communication',
    'computers',
    'cool',
    'courage',
    'dad',
    'dating',
    'death',
    'design',
    'dreams',
    'education',
    'environmental',
    'equality',
    'experience',
    'failure',
    'faith',
    'family',
    'famous',
    'fear',
    'fitness',
    'food',
    'forgiveness',
    'freedom',
    'friendship',
    'funny',
    'future',
    'god',
    'good',
    'government',
    'graduation',
    'great',
    'happiness',
    'health',
    'history',
    'home',
    'hope',
    'humor',
    'imagination',
    'inspirational',
    'intelligence',
    'jealousy',
    'knowledge',
    'leadership',
    'learning',
    'legal',
    'life',
    'love',
    'marriage',
    'medical',
    'men',
    'mom',
    'money',
    'morning',
    'movies',
    'success'
  ]

  status!: string;
  errorMessage!: string;
  requestFinished = false;
  requestValid = false;

  quotes: Quote[] = []
  public quote!: string;
  public author!: string;
  category!: string;

  constructor(private quotesService: QuotesService) { }

  onSearch() {
    if (this.categories.includes(this.category))
    this.quotesService.fetchQuote(this.category).subscribe(
        (data: any) => {
          console.log(data)
          this.quote = data[0].quote
          this.author = data[0].author
          this.status = data[0].Status
          this.requestFinished = true
          if (this.status === "404" || this.status === "Error") {
            this.errorMessage = "Invalid" + this.category + "! Try again."
            this.requestValid = false
            console.log(this.errorMessage)
          } else {
            let el: Quote = {quote: this.quote, author: this.author, category: this.category}
            
            this.quotes.push(el)
            this.errorMessage = ""
            this.requestValid = true
          }
        }, (error: any) => {
          this.errorMessage = "Unexpected Error Occurred!"
          this.requestValid = false
          console.log(this.errorMessage)
        }
      )
  }

  ngOnInit() {

  }

}

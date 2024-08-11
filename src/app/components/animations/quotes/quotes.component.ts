import { Component, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common'
import { QuotesService } from '../../../services/quotes.service';
import { Quote } from '../../../models/quote'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css'
})
export class QuotesComponent implements AfterViewInit {
  constructor(private location: Location, private quotesService: QuotesService, private renderer: Renderer2) { }
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
  quotes: Quote[] = []
  public quote!: string;
  public author!: string;
  category!: string;

  current!: ElementRef
  newest!: ElementRef

  status!: string;
  errorMessage!: string;
  requestFinished = false;
  requestValid = false;
 
  // @ViewChild('index') index!: ElementRef
  index!: number 
  @ViewChildren('quoteArea') quoteAreas!: QueryList<any>


  ngAfterViewInit() {
    let startQuote: Quote = {quote: "Live your best life 🥳", author: "Me", category: "Welcome"}
    this.quotes.push(startQuote)
    console.log(startQuote)
    this.setRandomColor()
    this.quoteAreas.toArray()
    this.index = 0
  }

  goBack() {
    this.location.back()
  }


  

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
    this.nextQuote()
  }

  copyToClipboard(quote:any) {
    navigator.clipboard.writeText(quote)
  }

  
  @ViewChild('colorpad') colorpad!: ElementRef
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  setRandomColor() {
    let newColor = this.getRandomColor()
    console.log("set random color")
    this.colorpad.nativeElement.style.backgroundColor = newColor
    
  }


  rightMargin = 0
  nextQuote() {
    this.renderer.setStyle(this.quoteAreas.first.nativeElement, 'margin-left', '50px')
    this.renderer.setStyle(this.quoteAreas.last.nativeElement, 'margin-right', this.rightMargin + 'px')
    this.rightMargin = 10

    this.newest = this.current
    this.index = this.quoteAreas.length

    

    this.current.nativeElement.classList.add('Hello')

    this.current = this.quoteAreas.toArray()[0]
    this.current = this.quoteAreas.toArray()[this.quoteAreas.toArray().length + 1 - this.quoteAreas.toArray().length]

    this.current = this.quoteAreas.toArray()[this.index]
    this.current = this.quoteAreas.toArray()[this.quoteAreas.toArray().indexOf(0)]
    this.current = this.quoteAreas.toArray()[this.quoteAreas.toArray().indexOf(0)]
    let temp = this.quoteAreas.last
    
  }
  lastQuote() {
    // this.renderer.addClass(this.quoteAreas.first.nativeElement, 'z-index', 0)
    this.renderer.setStyle(this.quoteAreas.first.nativeElement, 'z-index', 10)
    
    console.log('last quote')
  }

  getIndex(index: any) {
    if (this.quoteAreas.toArray()[index].nativeElement.innerText.includes('Index: ' + index)){
      console.log('it do same be')
      let temp = this.quoteAreas.toArray()[index]
      this.quoteAreas.toArray()[index]
    }
    console.log(this.quoteAreas.toArray()[index].nativeElement.innerText)
    this.current = this.quoteAreas.toArray()[index]
    console.log(this.current)
    console.log(index)
    console.log(this.quoteAreas.toArray()[index].nativeElement.style.zIndex)
    this.quoteAreas.toArray()[index].nativeElement.style.zIndex = "index"
    console.log(this.quoteAreas.toArray()[index].nativeElement.style.zIndex)
    for (let i = 0; i < this.quoteAreas.length; i++) {
      
      this.quoteAreas.toArray()[i].nativeElement.style.marginLeft = 50 + (i * 10) + "px"
    }
    console.log(this.quoteAreas.toArray()[this.index])
    console.log(this.quoteAreas.toArray()[index])
    this.quoteAreas.toArray()[this.index].nativeElement.innerHTML = this.quoteAreas.toArray()[index].nativeElement.innerHTML
    
    // console.log(this.quoteAreas.forEach() { return let inttotal += index})
  }
}

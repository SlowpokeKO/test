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
  category: any = this.categories[Math.floor(Math.random() * this.categories.length )]
  quotes: Quote[] = []
  public quote!: string;
  public author!: string;

  current!: ElementRef
  newest!: ElementRef

  status!: string;
  errorMessage!: string;
  requestFinished = false;
  requestValid = false;
 
  index!: number 
  @ViewChildren('quoteArea') quoteAreas!: QueryList<any>


  ngAfterViewInit() {
    let startQuote: Quote = {quote: "Live your best life 🥳", author: "Me", category: "Welcome"}
    this.quotes.push(startQuote)
    this.setRandomColor()
    this.index = this.quotes.length -1
  }

  goBack() {
    this.location.back()
  }

  timeout(ms:any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  // async sleep(fn, ...args) {
  //     await timeout(3000);
  //     return fn(...args);
  // }

  async onSearch() {
    if (this.categories.includes(this.category)) {
      this.quotesService.fetchQuote(this.category).subscribe(
        (data: any) => {
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
            // this.index = this.quotes.length -1
            this.requestValid = true
          }
        }, (error: any) => {
          this.errorMessage = "Unexpected Error Occurred!"
          this.requestValid = false
          console.log(this.errorMessage)
        })     
    }
  }

  rightMargin = 0
  @ViewChild('colorpad') colorpad!: ElementRef
  @ViewChild('billboard') billboard!: ElementRef
  async nextQuote() {
    if (this.newest === undefined) {
      this.current = this.quoteAreas.toArray()[0]
    }
    this.current.nativeElement.classList.remove('selected')
    await this.onSearch()
    await this.timeout(1500);
    console.log(this.quoteAreas.length)
    if (this.requestValid == true || this.newest === undefined) {
      console.log(this.billboard)
      this.index = this.quoteAreas.length -1
      this.newest = this.quoteAreas.toArray()[this.index]
      console.log(this.quoteAreas.length)
      console.log(this.current)
      this.current.nativeElement.classList.remove('selected')
      this.current = this.quoteAreas.toArray()[this.index]
      this.newest.nativeElement.classList.add('selected')
      console.log(this.colorpad.nativeElement)
      // this.colorpad.nativeElement.style.backgroundColor = this.setRandomColor()
      this.renderer.setStyle(this.colorpad.nativeElement, 'background-color', 'red')
      
      this.quoteAreas.last.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      this.rightMargin = 50
    
    // let leftPos = this.quoteAreas.toArray()[this.index].nativeElement.offsetLeft
    // this.renderer.removeClass(this.quoteAreas.toArray()[this.index-1].nativeElement,'selected')
   
    // this.renderer.setProperty(this.billboard.nativeElement, 'scrollLeft', leftPos)
    // this.renderer.setProperty(this.billboard.nativeElement, 'scrollLeft', leftPos)
    
    // console.log(this.quoteAreas.toArray()[this.index].nativeElement.offsetLeft)
    
    // this.current.nativeElement.classList.remove('selected')
    // this.quoteAreas.toArray()[index].nativeElement.classList.add('selected')
      
    // this.renderer.setStyle(this.quoteAreas.toArray()[this.index].nativeElement, 'margin-left', this.index + 'px')
    // this.quoteAreas.toArray()[0].nativeElement.style.marginRight = this.rightMargin + 'px'
    // this.renderer.setStyle(this.quoteAreas.last.nativeElement, 'margin-right', this.rightMargin + 'px')

    
    // if (this.quoteAreas.toArray()[this.index].nativeElement.innerText.includes(this.index)){
    //   console.log('it do same be')

    //   this.quoteAreas.toArray()[this.index].nativeElement.style.left = this.index * 50
    // } else {
    //   this.quoteAreas.toArray()[this.index].nativeElement.style.left = this.index * -50
    // }

    // for (let i = 0; i < this.quoteAreas.length; i++) {
      
    //   this.quoteAreas.toArray()[i].nativeElement.style.left = 50 + (i * 10) + "px"
    // }
    }
  }


  lastQuote() {
    // this.renderer.addClass(this.quoteAreas.first.nativeElement, 'z-index', 0)
    this.renderer.setStyle(this.quoteAreas.first.nativeElement, 'z-index', this.index + 1)
    console.log(this.quoteAreas.first)
    this.quoteAreas.first.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    console.log('last quote')
  }

  copyToClipboard(quote:any) {
    navigator.clipboard.writeText(quote)
  }

  removeIndex(index: any) {
    if (index > -1) { // only splice array when item is found
      this.quotes.splice(index, 1); // 2nd parameter means remove one item only
    }
  }


  getIndex(index: any) {
    console.log(this.quoteAreas.toArray()[index])

    if (this.quoteAreas.toArray()[index] == this.quoteAreas.toArray()[this.quoteAreas.length-1]) {
      console.log('top of quote pile')
      this.current.nativeElement.classList.remove('selected')
      this.current = this.quoteAreas.toArray()[index]
      this.current.nativeElement.classList.add('selected')
    } else {
      console.log('not top of quote pile')
      this.current.nativeElement.classList.remove('selected')
      this.current = this.quoteAreas.toArray()[index]
      this.current.nativeElement.classList.add('selected')
      
      this.current.nativeElement.style.zIndex = index + 1
    }

    this.index = index
    this.billboard.nativeElement.style.backgroundColor = this.setRandomColor()

    // this.quoteAreas.toArray()[index].nativeElement.innerText[1] = index
    // this.quoteAreas.toArray()[index].nativeElement.innerText[0] = 'hi'
    // this.quoteAreas.toArray()[index].nativeElement.style.zIndex = index
    // this.quoteAreas.toArray()[index].nativeElement.innerHTML = this.current.nativeElement.innerHTML
  }


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
    this.colorpad.nativeElement.style.color = newColor
    console.log(this.colorpad.nativeElement.style.backgroundColor)
    console.log(newColor)
    return newColor
  }

  random_bg_color() {
    // Generate random values for red, green, and blue components between 0 and 255.
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    // Construct the RGB color string.
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    // Output the generated color to the console.
    return bgColor
}


}

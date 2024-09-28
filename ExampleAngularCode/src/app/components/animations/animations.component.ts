import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'
import { RouterModule } from '@angular/router'
import { QuotesComponent } from '../quotes/quotes.component'

@Component({
  selector: 'app-animations',
  standalone: true,
  imports: [RouterModule],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow',
        transform: 'translateX(0)'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue',
        transform: 'translateX(-100%)'
      })),
      transition('open => closed', [
        animate('1.5s ease-out')
      ]),
      transition('closed => open', [
        animate('1s ease-out')
      ]),
    ]),
  ],
  templateUrl: './animations.component.html',
  styleUrl: './animations.component.css'
})

export class AnimationsComponent implements AfterViewInit {
  ngAfterViewInit() {

  }

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen
  }

  @ViewChild('perspLeft') pLeft!: ElementRef
  @ViewChild('perspRight') pRight!: ElementRef

  setPersp(input: any) {
    console.log(this.pLeft.nativeElement)
    this.pLeft.nativeElement.style.perspective = 'none'
    this.pLeft.nativeElement.style.padding = input+"px"
    // this.pLeft.nativeElement.style.color = "`#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`"

    this.setRandomColor()
  }

  setPerspRight(input: any) {
    this.pRight.nativeElement.style.perspective = 'none'
    this.pRight.nativeElement.style.padding = input+"px"

    this.setRandomBGColor()
  }

  @ViewChild('colorpad') colorpad!: ElementRef
  @ViewChild('colorlink') colorlink!: ElementRef
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }



  setRandomColor() {
    this.colorlink.nativeElement.style.color = this.getRandomColor()
  }

  setRandomBGColor() {
    this.colorpad.nativeElement.style.backgroundColor = this.getRandomColor()
  }
}

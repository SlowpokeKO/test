import { Component, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'
import { RouterModule } from '@angular/router'
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

export class AnimationsComponent {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen
  }

  @ViewChild('perspLeft') pLeft!: ElementRef
  setPersp(value: any) {
    console.log('hi')

    
    this.pLeft.nativeElement.style.perspective = 'none'
    this.pLeft.nativeElement.style.padding = value+"px"
    // this.pLeft.nativeElement.style.color = "`#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`"

    this.setRandomColor()
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
    this.colorpad.nativeElement.style.color = this.getRandomColor()
    // $("#colorpad").css("background-color", getRandomColor());
  }
}

import { Component, AfterViewInit, ViewChild, QueryList, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { BoxComponent } from './box/box.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BoxComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  constructor(private renderer: Renderer2, private elem: ElementRef) { }

  name = 'angular from the unique world.'

  //@ViewChild(BoxComponent, {static: false}) hello: BoxComponent

  //@ViewChild('header', {static: false}) headerRed: ElementRef

  ngAfterViewInit() {
    //@HostListener('document:scroll', [$event])
    console.log('Hello', this.name)
  }


  // @ViewChild(BoxComponent)

  // let global = this.renderer.listen('document', 'click', (evt) => {
  //   console.log('Clicking the document', evt);
  // })

  // public onViewportScroll() {
  //   forEach(box in this.boxes) {
  //     let boundingBoxTop = this.boxes[box].self.innerHeight

  //   }
  //   const windowHeight = window.innerHeight
  // }

  // window.addEventListener('scroll', this.checkBoxes)
    // boxes.forEach((box) => window.addEventListener('scroll', function() {
    //   if (window.scrollY > (box.offsetTop)) {
    //     this.renderer.addClass(this.box.nativeElement, 'show')
    //   }
    //   if (window.scrollY < (box.offsetTop)) && if(box.nativeElement.classList.contains('show')) {
    //     this.renderer.removeClass(this.box.nativeElement, 'show')
    //   }
    // }))


  //boxes = this.elem.nativeElement.querySelectorAll('.box')

  // checkBoxes() {
  //   console.log('hi')
  //   let triggerBottom = window.innerHeight /5 * 4
  //   this.boxes.forEach((box: any) => {
  //     const boxTop = box.getBoundingClientRect().top

  //     if (boxTop < triggerBottom) {
  //       box.classList.add('show')
  //     } else {
  //       box.classList.remove('show')
  //     }

  //   })
  // }
}

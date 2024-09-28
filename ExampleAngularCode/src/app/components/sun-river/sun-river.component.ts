import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-sun-river',
  standalone: true,
  imports: [],
  templateUrl: './sun-river.component.html',
  styleUrl: './sun-river.component.css'
})
export class SunRiverComponent {
  constructor(private location: Location, private renderer: Renderer2) {}
  goBack() {
    this.location.back()
  }

  @ViewChild('waveContainer') waveContainer!: ElementRef
  @ViewChild('waveShapes') waveShapes!: ElementRef
  populateWaves() {
    console.log(this.waveShapes)
    // this.waveShapes.nativeElement.insertAdjacentHTML('beforeend','<div class="quarterCircle"></div>')
    const quarterCircle: HTMLDivElement = this.waveShapes.nativeElement.firstChild.cloneNode(true)
    console.log(this.waveShapes.nativeElement.clientWidth)
    console.log(this.waveContainer.nativeElement.clientWidth)
    console.log(quarterCircle)

    while (this.waveShapes.nativeElement.clientWidth < this.waveContainer.nativeElement.clientWidth) {
      this.renderer.appendChild(this.waveShapes.nativeElement, quarterCircle)
      this.populateWaves()
    }
  }
}

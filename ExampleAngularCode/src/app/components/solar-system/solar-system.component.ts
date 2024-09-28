import { Component, ViewChild, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-solar-system',
  standalone: true,
  imports: [],
  templateUrl: './solar-system.component.html',
  styleUrl: './solar-system.component.css'
})
export class SolarSystemComponent implements AfterViewInit{
  constructor(private elem: ElementRef) {}

  yearCount: number = 0

  ngAfterViewInit() {
    this.countEarthYears()

  }

  async countEarthYears() {
    await this.timeout(3650)
    this.yearCount += 1
    this.countEarthYears()
  }

  alert(input: any) {
    console.log(input)
    alert('Oh, you clicked on ' + input + '.')
  }

  timeout(ms:any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // THE SOLAR SYSTEM
  // planets = ['']
  // @ViewChild('planets') planets!: ElementRef
  @ViewChildren('planetLabel') planetLabels!: QueryList<any>

  mouseHovering(input: any) {
    // event.stopImmediatePropagation()
    if (this.planetLabels.some(e => e.nativeElement.innerText === input)  && !this.elem.nativeElement.classList.contains('show')) {
      this.elem = this.planetLabels.toArray().find(e => e.nativeElement.innerText === input)
      this.elem.nativeElement.classList.add('show')
    }
  }

  mouseLeft(input: any) {
    console.log('leaving ' + input + '.')
    this.elem.nativeElement.classList.remove('show')
  }
}

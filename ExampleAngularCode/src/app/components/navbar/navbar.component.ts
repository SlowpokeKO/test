import { Component, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router'
import { NgForOf } from '@angular/common'
import { SnowFlakeComponent } from './snow-flake/snow-flake.component' 
import { ReactiveFormsModule } from '@angular/forms'

interface SnowFlakeConfig {
  depth: number ;
  left: number ;
  speed: number ;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, SnowFlakeComponent, NgForOf, ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit{
  @ViewChild('navbar') navbar!: ElementRef
  lastScrollTop: number = 0
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event:any) {
    // console.log(window.innerHeight)
    // console.log(window.pageYOffset)
    if (window.pageYOffset >= 10 && window.pageYOffset > this.lastScrollTop && !this.navbar.nativeElement.classList.contains('shrink')) {
      this.navbar.nativeElement.classList.add('shrink')
    } else if (window.pageYOffset < 50 && window.pageYOffset < this.lastScrollTop) {
      this.navbar.nativeElement.classList.remove('shrink')
    }
    this.lastScrollTop = window.pageYOffset
  }
  
  ngAfterViewInit() {
    console.log('show loaded')
  }

  public snowFlakes: SnowFlakeConfig[];

  // I initialize the app component.
  constructor() {
    this.snowFlakes = [];
    // this.generateFlakes()
  }

  generateFlakes() {
    this.snowFlakes = [];

    for ( var i = 1 ; i <= 150 ; i++ ) {

      this.snowFlakes.push({
        depth: this.randRange( 1, 5 ),
        left: this.randRange( 0, 100 ),
        speed: this.randRange( 1, 5 )
      });

    }
  }

  // ---
  // PRIVATE METHODS.
  // ---

  // I generate a random integer between the given range, inclusive.
  private randRange( min: number, max: number ) : number {

    var range = ( max - min );

    return( min + Math.round( Math.random() * range ) );
  }

  @ViewChild('snowToggleFlake') snowToggleFlake!: ElementRef
  toggleSnow() {
    if (this.snowFlakes.length > 0) {
      this.snowFlakes = []
      this.snowToggleFlake.nativeElement.classList.remove('hoverText')
    } else {
      this.generateFlakes()
      this.snowToggleFlake.nativeElement.classList.add('hoverText')
    }
    console.log('snow toggled')
  }

  // options = ['1','2','3']

}

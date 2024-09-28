import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component'
import { FooterComponent } from './components/footer/footer.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ExampleAngularCode';

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

  @ViewChild('outletcontainer') outletContainer!: ElementRef
  lastScrollTop: number = 0
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event:any) {
    if (window.pageYOffset >= 10 && window.pageYOffset > this.lastScrollTop && !this.outletContainer.nativeElement.classList.contains('shrink')) {
      this.outletContainer.nativeElement.classList.add('shrink')
    } else if (window.pageYOffset < 50 && window.pageYOffset < this.lastScrollTop) {
      this.outletContainer.nativeElement.classList.remove('shrink')
    }
    this.lastScrollTop = window.pageYOffset
  }
}

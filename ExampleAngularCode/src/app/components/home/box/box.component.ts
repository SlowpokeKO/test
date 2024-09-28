import { Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling'
import { ItemsComponent } from './items/items.component'

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [ScrollingModule, ItemsComponent],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})
export class BoxComponent {
  @ViewChild('theBox') box!: ElementRef;

  slide() {
    if (! this.box.nativeElement.classList.contains('show')) {
      this.box.nativeElement.classList.add('show')
    } else {
      this.box.nativeElement.classList.remove('show')
      this.box.nativeElement.style.backgroundColor = 'transparent'
    }
    
  }  

  activate() {
    if (this.box.nativeElement.classList.contains('show')) {
      this.box.nativeElement.style.backgroundColor = 'blue'

    } 

  }


}

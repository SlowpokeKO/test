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

    // this.box.nativeElement.style.backgroundColor = 'red'
    this.box.nativeElement.classList.toggle('show')
    
    
    console.log(this.box.nativeElement.innerHTML)

  }  

  activate() {
    if (this.box.nativeElement.classList.contains('show')) {
      this.box.nativeElement.style.backgroundColor = 'blue'
    }

  }


}

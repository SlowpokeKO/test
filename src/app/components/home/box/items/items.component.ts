import { Component, HostListener } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling'


@Component({
  selector: 'app-items',
  standalone: true,
  imports: [ScrollingModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {
  items = Array.from({length: 1000}, (undefined, i) => `Item ${i + 1}`)

  sendToConsole(event: any) {
    console.log('hi from items')
    console.log(event)
    console.log(event.target.value)
    console.log(this.items)
  }
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    console.log(event)
    console.log(event.keyCode)
    console.log(event.key)
    console.log(this.items)
    if (event.key === "Escape") {
      console.log('Worked')
    }
    let x = event.key;
    if (x === ' ') {
        console.log('space pressed!');
    }
    console.log(event)
    console.log(event.view)
    let up = false

  }

  drag() {
    console.log('dragging around')
  }
}

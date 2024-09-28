import { Component } from '@angular/core';
import { Location } from '@angular/common'
@Component({
  selector: 'app-inthetrees',
  standalone: true,
  imports: [],
  templateUrl: './inthetrees.component.html',
  styleUrl: './inthetrees.component.css'
})
export class InthetreesComponent {
  constructor(private location: Location) { }
  goBack() {
    this.location.back()
  }

  alert(input: any) {
    alert(input)
  }
}

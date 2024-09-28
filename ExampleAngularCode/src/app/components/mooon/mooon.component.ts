import { Component } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-mooon',
  standalone: true,
  imports: [],
  templateUrl: './mooon.component.html',
  styleUrl: './mooon.component.css'
})
export class MooonComponent {
  constructor(private location: Location) { }
  goBack() {
    this.location.back()
  }
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'
import { Location } from '@angular/common'

@Component({
  selector: 'app-outside',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './outside.component.html',
  styleUrl: './outside.component.css'
})
export class OutsideComponent {
  constructor(private location: Location) {}
  goBack() {
    this.location.back()
  }
}

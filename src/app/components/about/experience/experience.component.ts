import { Component } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  constructor(private location: Location) {}

  goBack() {
    this.location.back()
  }
}

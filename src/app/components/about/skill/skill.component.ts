import { Component } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {

  constructor(private location: Location) {}

  goBack() {
    this.location.back()
  }
}

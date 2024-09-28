import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  evaluation : any = ""
  addToCalc(char : any) {
    //make 0 as first char invalid
    if (this.evaluation.length = 0 && char != 0) {
      console.log('cant be 0 first')
    } else {
      this.evaluation += char
    }
  }

  backspace() {
    this.evaluation = this.evaluation.substr(0, this.evaluation.length - 1)
  }

  calculate() {
    this.evaluation = eval(this.evaluation)
    this.evaluation = this.evaluation.toString()
  }


}

import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-track-mouse',
  standalone: true,
  imports: [],
  templateUrl: './track-mouse.component.html',
  styleUrl: './track-mouse.component.css'
})
export class TrackMouseComponent {

  // GET THE CURSOR POS. ON MOUSE MOVE - Timeout intervals
  mouseMovingTO: boolean = true
  @ViewChild('info') infoElement!: ElementRef

  @HostListener('mousemove', ['$event']) // for window scroll events
  onMouseMove(event:any) {
    if (this.mouseMovingTO === true) {
      console.log(event)
      // let x = event.screenX;
      // let y = event.screenY;
      let x = event.clientX;
      let y = event.clientY;
      let _position = `X: ${x}<br>Y: ${y}`;
      console.log(x)
      console.log(y)
      console.log(_position)
      console.log(this.infoElement)
      this.infoElement.nativeElement.innerHTML = _position;
      this.infoElement.nativeElement.style.top = (y) + "px";
      this.infoElement.nativeElement.style.left = (x -10) + "px";

      this.mouseMovingTO = false
      this.mmTimeout()
    }
  }

  timeout(ms:any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async mmTimeout() {
    await this.timeout(1500)
    this.mouseMovingTO = true
  }


}

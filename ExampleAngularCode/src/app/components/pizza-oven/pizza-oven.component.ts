import { Component, ViewChild, ViewChildren, QueryList, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
// import { dra } from '@angular/common'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pizza-oven',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pizza-oven.component.html',
  styleUrl: './pizza-oven.component.css'
})
export class PizzaOvenComponent {
  constructor(private renderer: Renderer2) {}
  @ViewChild('prep') prep!: ElementRef
  @ViewChild('bake') bake!: ElementRef
  @ViewChild('ready') ready!: ElementRef
  @ViewChild('box') box!: ElementRef
  @ViewChild('powerBtn') powerBtn!: ElementRef
  @ViewChild('heatDial') heatDial!: ElementRef
  @ViewChild('timeDial') timeDial!: ElementRef
  @ViewChildren('lazyImg') toppingChoices!: QueryList<ElementRef>
  @ViewChildren('pizzaToppings') pizzaToppings!: QueryList<ElementRef>
  // @ViewChildren('.topping') pizzaToppings!: QueryList<ElementRef>
  @ViewChildren('toppingDisplay') toppingDisplay!: QueryList<ElementRef>
  @ViewChildren('toppings') toppingStages!: QueryList<ElementRef>
  
  toppings = ['Sauce', 'Cheese', 'Pepperoni', 'Sausage', 'Spicy sausage', 'Chicken', 'Bacon', 'Ham', 'Green peppers', 'Black olives', 'Pineapple']
  toppingImgBaseURL = './assets/toppings/'

  time = 15

  ngAfterViewInit() {
    for (let i = 0; i < this.toppingChoices.length; i++) {
      let top = this.toppings[i].replace(/\s/g, '')
      this.toppingChoices.toArray()[i].nativeElement.setAttribute('style', "background: url("+this.toppingImgBaseURL + top +".jpg); background-size: contain; background-repeat: no-repeat; background-position: right; background-color: floralwhite;")
      
      //add sauce and cheese by default
      if (!this.toppingChoices.toArray()[i].nativeElement.innerText.indexOf('Cheese') || !this.toppingChoices.toArray()[i].nativeElement.innerText.indexOf('Sauce')) {
          this.toppingChoices.toArray()[i].nativeElement.classList.add('added')
      }
    }
    this.toppingDisplay.forEach(element => {
      if (!element.nativeElement.innerText.indexOf('Sauce') || !element.nativeElement.innerText.indexOf('Cheese')) {
        element.nativeElement.classList.toggle('viewable')
      }
    })

    //randomly rotate each topping
    for (let i = 0; i < this.pizzaToppings.first.nativeElement.childNodes.length; i++) {
      for (let x = 0; x < this.pizzaToppings.first.nativeElement.childNodes[i].childNodes.length; x++) {
        // this.renderer.setStyle(this.pizzaToppings.first.nativeElement.childNodes[i].childNodes[x], 'transform', `rotate(${(Math.floor(Math.random() * 360)}deg)`);
        this.pizzaToppings.first.nativeElement.childNodes[i].childNodes[x].style.rotate = (Math.floor(Math.random() * 360) + 'deg')
      // this.pizzaToppings.first.nativeElement.childNodes.nativeElement.style.rotate = 
      }
    }

    var radius = this.heatDial.nativeElement.clientHeight /2
    // const center_x = this.heatDial.nativeElement
    // for (let i = 0; i < this.toppingStages.length; i++) {
    //   this.toppingStages.toArray()[i].nativeElement.innerHTML = this.pizzaToppings.nativeElement.innerHTML
    // }
    this.toppingStages.forEach(stage => stage.nativeElement.innerHTML = this.pizzaToppings.first.nativeElement.innerHTML)

    // this.prep.nativeElement.innerText = this.pizzaToppings.innerText

    // console.log(this.pizzaToppings.first.nativeElement)
    // const toppingDiv: HTMLDivElement = this.pizzaToppings.first.nativeElement.cloneNode(true)
    // this.renderer.appendChild(this.prep.nativeElement, toppingDiv)
    // this.renderer.appendChild(this.bake.nativeElement, toppingDiv)
    // this.renderer.appendChild(this.ready.nativeElement, toppingDiv)
    // for (let x = 0; x < this.servingSizes.indexOf(serving.value) +2; x++) {
    //   this.renderer.appendChild(this.pizzaToppings.first.nativeElement.childNodes[x], toppingDiv)
    
    // }

  }

  //manual prep bake ready click controls
  selectedEl: ElementRef = this.prep
  selected(select: any) {
    this.prep.nativeElement.classList.remove('selected')
    this.bake.nativeElement.classList.remove('selected')
    // this.ready.nativeElement.classList.remove('selected')
    if (select == 'prep') {
      // this.selectedEl.nativeElement.classList.remove('selected')
      this.prep.nativeElement.classList.add('selected')
      this.selectedEl = this.prep
    } else if (select == 'bake') {
      // this.selectedEl.nativeElement.classList.remove('selected')
      this.bake.nativeElement.classList.add('selected')
      this.selectedEl = this.bake
    } else if (select == 'ready') {
      // this.selectedEl.nativeElement.classList.remove('selected')
      this.ready.nativeElement.classList.add('selected')
      this.selectedEl = this.ready
    } else if (select == 'box') {
        if (this.selectedEl == this.ready) {
          this.ready.nativeElement.classList.add('boxd')
          this.box.nativeElement.classList.add('pizzad')
        } else {
          this.selectedEl.nativeElement.classList.add('selected')
        }
      }
  } 



  servingSizes = ['Light', 'Regular', 'Extra', 'Okay']
  servings = [{key: 'Sauce', value: this.servingSizes[1]},
    {key: 'Cheese', value: this.servingSizes[1]},
    {key: 'Pepperoni', value: this.servingSizes[1]},
    {key: 'Sausage', value: this.servingSizes[1]},
    {key: 'Spicy sausage', value: this.servingSizes[1]},
    {key: 'Chicken', value: this.servingSizes[1]},
    {key: 'Bacon', value: this.servingSizes[1]},
    {key: 'Ham', value: this.servingSizes[1]},
    {key: 'Green peppers', value: this.servingSizes[1]},
    {key: 'Black olives', value: this.servingSizes[1]},
    {key: 'Pineapple', value: this.servingSizes[1]}
    ]

  selectTopping(name: any) {
    this.toppingChoices.forEach(element => {
      if (!element.nativeElement.innerText.indexOf(name)) {
        element.nativeElement.classList.toggle('added')
      }
    })
    // console.log(this.pizzaToppings)
    // this.pizzaToppings.forEach(element => {
    //   if (element.nativeElement.innerText == name) {
    //     element.nativeElement.classList.toggle('added')
    //   }
    // })
    for (let i = 0; i < this.pizzaToppings.first.nativeElement.childNodes.length; i++) {
        if (this.pizzaToppings.first.nativeElement.childNodes[i].classList.contains(name.toLowerCase())) {
          this.pizzaToppings.first.nativeElement.childNodes[i].classList.toggle('added')
      }
    }
    this.toppingDisplay.forEach(element => {
      if (!element.nativeElement.innerText.indexOf(name)) {
        element.nativeElement.classList.toggle('viewable')
      }
    })

    this.toppingStages.forEach(stage => stage.nativeElement.innerHTML = this.pizzaToppings.first.nativeElement.innerHTML)

  }

  lessTopping(name: any) {
    let serving = this.servings[this.servings.findIndex(function(serving){
              return serving.key == name
            })]

    if (this.servingSizes.indexOf(serving.value) > 0) {
      let size = this.servingSizes.find((element) => element == serving.value)

      //update topping pizza display / iterate through element's elements
      for (let i = 0; i < this.pizzaToppings.first.nativeElement.childNodes.length; i++) {
        if (this.pizzaToppings.first.nativeElement.childNodes[i].classList.contains(name.toLowerCase())) {
          this.pizzaToppings.first.nativeElement.childNodes[i].classList.remove(serving.value.toLowerCase())
          serving.value = this.servingSizes[(this.servingSizes.indexOf(size as string) -1)]
          this.pizzaToppings.first.nativeElement.childNodes[i].classList.add(serving.value.toLowerCase())
          
          

          // const toppingDiv: HTMLDivElement = this.pizzaToppings.first.nativeElement.childNodes[i].childNodes[0].cloneNode(true)
          // for (let x = 0; x < this.servingSizes.indexOf(serving.value) +2; x++) {
          //   this.renderer.appendChild(this.pizzaToppings.first.nativeElement.childNodes[x], toppingDiv)
          
          // }
        }
      }
      this.toppingStages.forEach(stage => stage.nativeElement.innerHTML = this.pizzaToppings.first.nativeElement.innerHTML)

      console.log('good to lessit')
    } else {
      console.log('already less')
    }
  }

  moreTopping(name: any) {
    let serving = this.servings[this.servings.findIndex(function(serving){
              return serving.key == name
            })]

    if (this.servingSizes.indexOf(serving.value)+1 < this.servingSizes.length) {
      let size = this.servingSizes.find((element) => element == serving.value)

      //update topping pizza display / iterate through element's elements
      for (let i = 0; i < this.pizzaToppings.first.nativeElement.childNodes.length; i++) {
        if (this.pizzaToppings.first.nativeElement.childNodes[i].classList.contains(name.toLowerCase())) {
          this.pizzaToppings.first.nativeElement.childNodes[i].classList.remove(serving.value.toLowerCase())
          serving.value = this.servingSizes[(this.servingSizes.indexOf(size as string) +1)]
          this.pizzaToppings.first.nativeElement.childNodes[i].classList.add(serving.value.toLowerCase())
        }
      }
      this.toppingStages.forEach(stage => stage.nativeElement.innerHTML = this.pizzaToppings.first.nativeElement.innerHTML)

      console.log('good to moreit')
    } else {
      console.log('already more')
    }

  }

  @ViewChild('rightPrepStation') rightPrepStation!: ElementRef
  @ViewChild('heatArea') heatArea!: ElementRef
  @ViewChild('prepPizza') prepPizza!: ElementRef
  @ViewChild('door') door!: ElementRef
  
  async finishPrep() {
    //1 rightprepstation width from 100% to 0
    //2 open door
    //3 translate pizza x & y offset to = the oven
    this.rightPrepStation.nativeElement.style.width = 0
    this.rightPrepStation.nativeElement.style.opacity = 0
    // let offsetY = this.heatArea.nativeElement.clientHeight - this.prepPizza.nativeElement.clientHeight
    this.prepPizza.nativeElement.classList.add('intheoven')

    //door opening timing
    await this.timeout(1000)
    if (!this.door.nativeElement.classList.contains('open')) {
      this.toggleDoor()
    }

    //prepPizza z-index timing
    await this.timeout(2000)
    this.prepPizza.nativeElement.style.zIndex = "1"

    this.toggleDoor()


  }
  timeout(ms: any) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  toggleDoor() {
    this.door.nativeElement.classList.toggle('open')
  }

  @ViewChild('lightbulb') lightbulb!: ElementRef
  @ViewChild('heatColor') heatColor!: ElementRef
  powerToggle() {
    this.powerBtn.nativeElement.classList.toggle('on')
    this.heatColor.nativeElement.classList.toggle('on')
    this.lightbulb.nativeElement.checked = !this.lightbulb.nativeElement.checked
    
    if (this.prepPizza.nativeElement.classList.contains('intheoven')) {
      if (!this.ready.nativeElement.classList.contains('selected')) {
        this.selected('bake')
        //start pizza
        this.prepPizza.nativeElement.classList.add('cooking')
        this.prepPizza.nativeElement.style.webkitAnimationPlayState = 'running'
      } else {
        //pause pizza
        this.prepPizza.nativeElement.style.webkitAnimationPlayState = 'paused'

      }
    }

    if (!this.powerBtn.nativeElement.classList.contains('on')) {
      this.bake.nativeElement.classList.remove('selected')
      this.pauseTimer()
    } else {
      this.startTimer(this.time, this.timeDial)
    }
  }

  pauseTimer() {

  }
  startTimer(duration: any, display: any) {
    this.prepPizza.nativeElement.style.animationDuration = this.time +'s'
    let timer : any = duration, minutes : any, seconds : any;
    var dial = this.timeDial
    var done = false
    setInterval(function () {
      minutes = (parseInt(timer) / 60, 10)
      seconds = (parseInt(timer) % 60, 10)

      minutes = minutes < 10 ? "0" + minutes : minutes
      seconds = seconds < 10 ? "0" + seconds : seconds
      console.log(dial)
      dial.nativeElement.innerText = minutes + ":" + seconds

      if (--timer < 0) {
        // timer = duration

      }
      if (done) {
        return
      }
    }, 1000)
  }
  // startTimer(duration: any, display: any) {
  //   this.prepPizza.nativeElement.style.animationDuration = this.time +'s'
  //   let start = Date.now(), diff, minutes : any, seconds : any;
  //   console.log(start)
  //   function timer() {
  //     console.log('hi')
  //     diff = duration +(((Date.now() - start) /1000) | 0);
  //     minutes = (diff / 60) | 0
  //     seconds = (seconds % 60) | 0
  //     minutes = minutes < 10 ? "0" + minutes : minutes
  //     seconds = seconds < 10 ? "0" + seconds : seconds
  //     display.nativeElement.innerText = minutes + ":" + seconds
  //     if (diff <= 0 ) {
  //       start = Date.now() + 1000
  //     }
  //     timer()
  //     setInterval(timer, 1000)
  //   }
  // }


  getDegrees(mouse_x: any, mouse_y: any) {
    // const radians = Math.atan2(mouse_x, mouse_y)
    // const degrees = Math.round((radians * (180 / Math.PI) * -1) + 100)
    const center = {x: this.heatDial.nativeElement.offsetLeft + this.heatDial.nativeElement.offsetWidth /2, 
    y: this.heatDial.nativeElement.offsetTop + this.heatDial.nativeElement.offsetHeight /2}
    console.log(center)
    console.log(mouse_x,mouse_y)
    const degrees = Math.atan2(center.x - mouse_x, center.y - mouse_y) * (180 / Math.PI)
    return degrees
  }

  // radius = this.heatDial.nativeElement.outerWidth()
  mouseDownDial(event: any) {
    // const click_degrees = this.getDegrees(event.offsetX, event.offsetY)
    // const degrees = this.getDegrees(event.pageX, event.pageY) - click_degrees
    // const offsetAngle = (event.offsetX - 68, event.offsetY - 68)
    // const click_degrees = this.getDegrees(event.offsetX, event.offsetY, this.heatDial.nativeElement.clientHeight, this.heatDial.nativeElement.clientWidth)
    console.log(event)
    console.log(this.heatDial)
    const degrees = this.getDegrees(event.offsetX, event.offsetY)
    console.log(degrees)
    this.heatDial.nativeElement.style.rotate = degrees +'deg'
    console.log(this.heatDial.nativeElement.style)
  }
  mouseUpDial(event: any) {
    console.log(this.heatDial)
    console.log(event)
  }

  // delayTrue() {
  //   return new Observable(s => setTimeout(() => (s.next(true),s.complete())))
  // }

  // radius  = this.heatDial.nativeElement.outerWidth() / 2;
  // center_x  = this.heatDial.nativeElement.offset().left + radius;
  // center_y  = this.heatDial.nativeElement.offset().top + radius;
  
  // get_degrees(mouse_x, mouse_y) {
  //   const radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
  //   const degrees = Math.round((radians * (180 / Math.PI) * -1) + 100);

  //   return degrees;
  // }
  
  // mouseDownDial() {

  // }
  // this.heatDial.nativeElement.on('mousedown', function(event) {
    
  //   // Calculate the mouse position in degrees
  //   const click_degrees = get_degrees(event.pageX, event.pageY);

  //   $(document).bind('mousemove', click_degrees, function(event) {
  //     // Calculate the mouse move position, removing starting point
  //     const degrees = get_degrees(event.pageX, event.pageY) - click_degrees;

  //     this.heatDial.nativeElement.css('transform', 'rotate('+degrees+'deg)');
  //   });
  // });

  // mouseUpDial() {
  //   $(document).unbind('mousemove');
  // }
  

}

import { Component, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements AfterViewInit{
  constructor(private renderer: Renderer2) { }
  ngAfterViewInit() {
    this.todoInput = this.defaultTodo[Math.floor(Math.random()* this.defaultTodo.length)]
  }

  defaultTodo: Array<string> = ["say i'm sorry", "thank someone", "be happy to be alive", "find happiness"]
  todoInput: string = ""
  todo: Array<string> = []
  complete: Array<string> = []
  @ViewChildren('container') containers!: QueryList<any>
  @ViewChild('completedContainer') completedContainer!: ElementRef


  submit() {
    if (this.todoInput != '') {
      this.todo.unshift(this.todoInput)
      this.todoInput = ""
    }
  }

  async completed(index: any) {
    // let yOffset = this.containers.toArray()[index].nativeElement.clientHeight
    let yOffset = 1000
    this.containers.toArray()[index].nativeElement.classList.remove('set')
    this.containers.toArray()[index].nativeElement.classList.add('checked')
    // this.renderer.setStyle(this.containers.toArray()[index].nativeElement, 'transform', `scale(${yOffset}`)
    const doneItem = this.todo[index]

    await this.timeout(3000)
    this.complete.unshift(doneItem)

    this.todo = this.todo.filter(function(item) {
      return item !== doneItem
    })
    console.log(this.todo)
  }

  timeout(ms: any) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  removeIndex(index: any) {
    if (index > -1) { // only splice array when item is found
      this.complete.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrl: './todoapp.component.css'
})
export class TodoappComponent {
  
  taskArray = [{ taskName: "Brush Teeth", isCompleted: false }]
  

  onSubmit(form: NgForm) {
    console.log(form)

    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted:false
    })

    form.reset()
  
  }
  
  onDelete(index: number) {
    console.log(index)
    this.taskArray.splice(index,1)
  }

  onCheck(index: number) {
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted
    console.log(this.taskArray[index].isCompleted)
  }
}

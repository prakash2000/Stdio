import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgFor],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {
  public students: any[] = [];
  ngOnInit() {
    this.loadStudents();
  }

  loadStudents(){
    this.students = [
      {
        id: 1,
        name: 'Barath',
        class: 'IT-A'
      },
      {
        id: 2,
        name: 'Dhinesh',
        class: 'IT-A'
      }
    ]
  }

}

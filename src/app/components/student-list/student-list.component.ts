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
        name: 'Abinav',
        class: 'IT-A'
      },
      {
        id: 2,
        name: 'Abinayasri',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Abinesh',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Abisornam',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Adhithya pranave',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Ajay',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Ajay kumar',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Akash',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Ammar',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Anika',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Anisabarvin',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Archana Gurusamy',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Arundhathi',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Ashwin Kumar',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Ashwin Shanmuganathan',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Bala Adithya',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Balaji',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Balasubramaniyan',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Barath',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Bharanidharan S',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Bharath Ganesh K',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Bhavadharani S',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Bhuvanashiri S K',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Boopalan M',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Brindhaa P',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Deepak R G',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Deepak T',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Deepika S',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Deepika Rani K',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Dhaksinyaa M D',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Dhanya K',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Dharaneesh S',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Dharshan R',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Dhivya S',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Dhivya V',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Divya P',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Elakkiya M',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Elaya Bharathi K',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Flintoff J',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Gayathri G',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Gokilavani M',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Gokul K',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Gopalakrishnan M',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Gopinath P',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Gowsik P',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Gunasekarapandian S',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Hak Ashiq M',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Harini M',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Hemalatha P N',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Imthiyaz Husain A',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Jeycharan P',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Jothiga S',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Justus Faby Jeyakumar J',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Kaarthikeyan B',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Kamesh J',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Kavin Raj S',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Kavinya M',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Kiruthiga M',
        class: 'IT-A'
      },
      {
        id: 1,
        name: 'Krishna Bharathi P',
        class: 'IT-A'
      },
     



    ]
  }

}

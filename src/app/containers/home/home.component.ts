import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // https://openbase.io/js/ng-simple-slideshow
  imageUrlArray = [
    '../../../assets/images/1.jpg',
    '../../../assets/images/2.jpg',
    '../../../assets/images/3.jpg',
    '../../../assets/images/4.jpg',
    '../../../assets/images/5.jpg',
    '../../../assets/images/6.jpg',
    '../../../assets/images/7.jpg',
    '../../../assets/images/8.jpg',
    '../../../assets/images/9.jpg'
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // https://openbase.io/js/ng-simple-slideshow
  imageUrlArray = [
    '../../../assets/images/angular.png',
    '../../../assets/images/vs-code.png',
    '../../../assets/images/javascript.png',
    '../../../assets/images/html5.png',
    '../../../assets/images/css3.png',
    '../../../assets/images/bootstrap.png',
    '../../../assets/images/github.png',
    '../../../assets/images/gitlab.png',
    '../../../assets/images/ngrx.png',
    '../../../assets/images/rxjs.png',
    '../../../assets/images/sass.png'

  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import  Typed  from 'typed.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

    const typed = new Typed('#role', {
      strings: ['Ruby On Rails Developer.', 'Android Developer.', 'Full Stack Developer.'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 50,
      loop: true
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ns-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goLinkedin() {
    location.href = "https://www.linkedin.com/in/jorge-jes%C3%BAs-campoy-l%C3%B3pez-53829a129/";
  }

}

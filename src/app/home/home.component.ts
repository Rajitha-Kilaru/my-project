import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	fname = ['info', 'profile', 'services', 'contact'];
	fname1 = ''
  constructor(private router: Router) { 
  		// this.fname = ''
  }
  func() {
  	if(this.fname.indexOf(this.fname1) != -1) {
  		this.router.navigate([this.fname1]);
  	}
  	// console.log(this.fname);
  }
  ngOnInit(): void {
  }

}

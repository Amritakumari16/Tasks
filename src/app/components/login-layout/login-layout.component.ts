import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent implements OnInit {
  logo = '/assets/logo.png'
  isExpanded = true;
  constructor() { }

  ngOnInit(): void {
  }
  mouseenter() {
    if (!this.isExpanded) {
      // this.isShowing = true;
      this.isExpanded = true;
    }
  }

  mouseleave() {
    console.log('MouseLeave', this.isExpanded)
    if (this.isExpanded) {
      // this.isShowing = true;
      this.isExpanded = false;
    }

    console.log('MouseLeave', this.isExpanded)
  }
}

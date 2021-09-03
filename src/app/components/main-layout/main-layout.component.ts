import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavItem } from './nav-item';
import {Router} from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav', { static: false }) sidenav: any;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  badgeCount: number;
  public avatar: string = '';
  logo = '/assets/logo.png'

  navItems: NavItem[] = [
    {
      displayName: 'Home',
      iconName: 'home',
      route: 'app/home',
      children: []
    },
  ];

  mouseenter() {
    if (!this.isExpanded) {
      // this.isShowing = true;
      this.isExpanded = true;
    }
  }

  mouseleave() {
    if (this.isExpanded) {
      // this.isShowing = true;
      this.isExpanded = false;
    }
  }

  constructor(private elRef: ElementRef, public router: Router,private appService:AppService) {
    this.badgeCount = 5;
  }
  incrementCount() {
    this.badgeCount++;
  }

  clearCount() {
    this.badgeCount = 0;
  }

  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
    }
    if (item.children && item.children.length) {
    }
  }
  logout(){
    this.appService.logout();
    this.router.navigateByUrl('login');
  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

}

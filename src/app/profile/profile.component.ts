import { Component, OnInit } from '@angular/core';
import { FakerService } from '../faker.service';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

import * as faker from 'faker';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetails: any;


  constructor(public http: FakerService) { }

  ngOnInit() {
    this.userInfo();
  }

  userInfo() {
    this.http.getUsers().subscribe( data => {
      this.userDetails = data;
      console.log(this.userDetails);
      console.log(this.userDetails.length);
    },
    err => {
      console.log(err);
    });
  }
  onScroll() {
    console.log('scrolled');
    const last = this.userDetails[this.userDetails.length - 1];
    for (let i = 0; i <= 100; i++) {
      this.userDetails.push(last + i);
    }
  }

}

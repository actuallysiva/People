import { Component, OnInit } from '@angular/core';
import { FakerService } from '../faker.service';
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
    const user = {
      name: faker.helpers.userCard(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
      bio: faker.lorem.sentence(),
      image: faker.image.avatar()
    };
  }
  userInfo() {
    this.http.getData().subscribe( data => {
      if (data.Ressponse === true) {
        this.userDetails = data;
        console.log(this.userDetails);
      }

    });
  }

}

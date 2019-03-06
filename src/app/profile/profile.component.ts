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
  public userDetails: any;
  data: any = {};
  finalData: any;
  private noOfItemsToShowInitially = 5;
  public isFullListDisplayed = false;
  private itemsToLoad = 5;
  constructor() { }
  ngOnInit() {
    const generator = (schema, min = 1, max) => {
      max = max || min;
      return Array.from({ length: faker.random.number({ min, max }) }).map(() => Object.keys(schema).reduce((entity, key) => {
        entity[key] = faker.fake(schema[key]);
        return entity;
      }, {}));
    };
    const user = {
      name: '{{name.firstName}} {{name.lastName}}',
      image: '{{image.avatar}}',
      date: '{{date.recent}}',
      likes: '{{random.number}}',
      count: '{{random.number}}',
      comments: '{{lorem.sentence}}',
      desc: '{{lorem.paragraph}}',
      comment2: '{{lorem.sentence}}',
      avatar2: '{{image.avatar}}',
      avatar3: '{{image.avatar}}'
    };

    const data = generator(user, 20, 20);
    const finalData = data;
    this.userDetails = data.slice(0, this.noOfItemsToShowInitially);
    console.log(finalData);
    console.log(this.userDetails.length);
  }

  onScrollDown() {
    if (this.noOfItemsToShowInitially <= this.data.length) {
      this.noOfItemsToShowInitially += this.itemsToLoad;
      this.userDetails = this.data.slice(0, this.noOfItemsToShowInitially);
      console.log('scrolled');
    } else {
      this.isFullListDisplayed = true;
    }
    }
  }


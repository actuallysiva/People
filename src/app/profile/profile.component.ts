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
  public data: any = {};
  public finalData: any;
  private noOfItemsToShowInitially = 5;
  public isFullListDisplayed = false;
  private itemsToLoad = 5;
  public sorted;
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
    this.finalData = data;
    this.sorted = this.finalData.sort((d1, d2) => new Date(d1.date).getTime() - new Date(d2.date).getTime() );

    console.log(this.sorted);
    this.userDetails = data.slice(0, this.noOfItemsToShowInitially);
    console.log(this.userDetails.length);
  }

  onScrollDown() {
    console.log('scrolled');
    console.log(this.noOfItemsToShowInitially);
    if (this.noOfItemsToShowInitially <= 20) {
      console.log('entered');
      this.noOfItemsToShowInitially += this.itemsToLoad;
      this.userDetails = this.finalData.slice(0, this.noOfItemsToShowInitially);
    } else {
      this.isFullListDisplayed = true;
    }
    }
  }


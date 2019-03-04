import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as faker from 'faker';

@Injectable({
  providedIn: 'root'
})
export class FakerService {
  user: any;
  constructor(public http: HttpClient) {
    const user = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
      bio: faker.lorem.sentence(),
      image: faker.image.avatar()
    };
  }
  getData(): Observable<any> {
    return this.http.get(`http://faker.hook.io?property=${helpers.userCard}`);
  }
  }

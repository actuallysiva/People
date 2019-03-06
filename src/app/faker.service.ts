import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as faker from 'faker';
@Injectable({
  providedIn: 'root'
})
export class FakerService {
  constructor(public http: HttpClient) {
    console.log('Service constructor...');
  }
  getUsers(): Observable<any> {
   return this.http.get(`http://faker.hook.io/?property=helpers.contextualCard&locale=en`);
  }
  }

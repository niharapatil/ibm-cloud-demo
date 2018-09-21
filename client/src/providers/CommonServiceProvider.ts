import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { environment } from '../environments/environment';
@Injectable()
export class CommonService {

data:any;
addPostResponse:any;

  constructor(public http: Http) {
   
  }

  getAllData() {
    console.log('get all data');
    this.data=null;
      if (this.data) {
    return Promise.resolve(this.data);
  }

  return new Promise(resolve => {
    this.http.get(environment.host+'api/v1/getBlogData')
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
        console.log(this.data);
      });
  });
 }
  
 
 addPost(record) {
  console.log(record);
   return new Promise(resolve => {
   this.http.post(environment.host+'api/v1/addBlogData', record)
     .map(res => res.json())
     .subscribe(data => {
     this.addPostResponse = data;
     resolve(this.addPostResponse);
     console.log(this.addPostResponse);
     });
 });
}

}
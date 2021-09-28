import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  dataRec: any;
  users: any;
  length: any;
  constructor(private http: HttpClient) { }

  // service to fetch data from the api using http client request
  getJSONData() {
    return this.http.get("https://reqres.in/api/users");
  }

  // service to fetch single user data from the api
  getSingleUserData(id: any) {
    return this.http.get("https://reqres.in/api/users/" + id);
  }
 
  // service to get object of single user from the edit component
  setDataFromEditComp(data: any, url: any) {
    this.dataRec = data;
    this.dataRec.avatar = url;
    console.log(this.dataRec); // object of the single user being modified
    let ids: number[] = [];

    for (var i = 0; i < this.users.length; i++) {
      ids.push(this.users[i].id);
    }
    console.log(ids);

    let index = ids.indexOf(this.dataRec.id);

    this.users[index] = this.dataRec;
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  // getting users array from the user-list component 
  getUsers(data: any) {
    this.users = data;
    console.log(this.users.length);// users array from the user-list component

    this.length = this.users.length;
  }
}

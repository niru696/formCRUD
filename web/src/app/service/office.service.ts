import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfficeService { 

uri = 'http://localhost:4000/office';

  constructor(private http: HttpClient) { }

  addOffice(client_name) {
    console.log("in service ");
    const obj = {
      client_name: client_name
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj).subscribe(res => console.log('Done'));

  }



  getBusinesses() {
    return this
           .http
           .get(`${this.uri}`);
  }

   editBusiness(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }


updateBusiness(client_name , id) {

    const obj = {
        client_name: client_name
      };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

deleteBusiness(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
   
}

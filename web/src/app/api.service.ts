import { Injectable } from  '@angular/core';
//import { Http, Response } from '@angular/http';
import { HttpClient, HttpParams} from  '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Lesson } from './model/lesson';


@Injectable({
providedIn:  'root'
})

export  class  APIService {
  // const httpOptions = {
  //   headers: new HttpHeaders({'Content-Type': 'application/json'})
  // };

  API_URL  =  'http://localhost:1235/emp';
  constructor(private  httpClient:  HttpClient) {}


  getContacts(): Observable<any>{
    var x=this.httpClient.get(`${this.API_URL}/display`);
    console.log(x);
      return  this.httpClient.get(`${this.API_URL}/display`);
  }
    
 findDetails(filter = '', sortOrder = 'asc', pageNo = 1, size = 5): Observable<Lesson[]>{
 return this.httpClient.get(`${this.API_URL}/details`, {
  params: new HttpParams()
          .set('filter', filter)
          .set('sortOrder', sortOrder)
          .set('pageNo', pageNo.toString())
          .set('size', size.toString()) 
}).pipe(
   map(res => res ["payload"])
)

 }



 array=[]; 
   x;
   object1= [];

   
  createContact(contact){
    let arr4=[];
   let arr3 = [];
  if(contact){
  let arr=[];
    arr.push(contact);
this.array.push(arr);

this.array[0].forEach((itm, i) => {
  arr3.push(Object.assign({}, itm, this.array[1][i]));
});

console.log(arr3);

arr3.forEach((itm, i) => {
  arr4.push(Object.assign({}, itm, this.array[2][i]));
});

console.log(arr4);
var object1 = Object.assign({}, ...arr4);
console.log(object1);
return this.httpClient.post(`${this.API_URL}/create`, object1);

    // this.array[0].forEach((itm, i) => {
    //   arr3.push(Object.assign({}, itm, this.array[1][i]));
    // });
    //     console.log(contact);
      
        // return  this.httpClient.post(`${this.API_URL}/create`, contact);
       //return  this.httpClient.get(`${this.API_URL}/create`);
          
      }
    //   else{//console.log("yghgfh"); console.log(this.array);
      
    //   this.array[0].forEach((itm, i) => {
    //     arr3.push(Object.assign({}, itm, this.array[1][i]));
    //   });
      
    //   console.log(arr3);
      
    //   arr3.forEach((itm, i) => {
    //     arr4.push(Object.assign({}, itm, this.array[2][i]));
    //   });
      
    //   console.log(arr4);
    //   var object1 = Object.assign({}, ...arr4);
    //   console.log(object1);
    //   return this.httpClient.post(`${this.API_URL}/create`, object1);
   
      
    // } 
   // this.array.length=0;
}


getContact(id: string): Observable<any> {
 // const url = `${apiUrl}/${id}`;
 
 console.log(id);
  return this.httpClient.get(`${this.API_URL}/display/`+id)
}

updateContact(id, data): Observable<any> {
 // const url = `${apiUrl}/${id}`;
// console.log(id);
 console.log(data);
  return this.httpClient.put(`${this.API_URL}/display/`+id, data)
  
  }

deleteContact(id: string): Observable<{}> {
  //const url = `${this.API_URL}/display/:${id}`;
  console.log(id)
  //var x=id._id;
  return this.httpClient.delete(`${this.API_URL}/display/`+id)
    
}

}

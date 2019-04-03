import { Component, OnInit, ViewChild } from '@angular/core';
import { APIService } from '../api.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource  } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
   private contacts: Array<object>= [];
  // @ViewChild(MatPaginator) paginator: MatPaginator;
   //@ViewChild(MatSort) sort: MatSort;

   MyDataSource: any;
   displayedColumns = ['firstname', 'lastname', 'email', 'work', 'street', 'city', 'state', 'zip'];
   dataSource = new ContactDataSource(this.apiService);
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private apiService: APIService
    ) { }

  ngOnInit() {
    this.getContacts();
  // this.dataSource.paginator = this.paginator;
  }
  
 public getContacts(){
   this.apiService.getContacts().subscribe((data: Array<Object> ) =>{
   this.contacts= data;
  //  this.MyDataSource = new MatTableDataSource();
  //  this.MyDataSource=data;
  //  this.MyDataSource.paginator=this.paginator;
   //this.MyDataSource.sort = this.sort;

   //this.contacts.paginator = this.paginator;
   //console.log("01 "+ JSON.stringify(data));
 }); 
 }

}


export class ContactDataSource extends DataSource<any> {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private apiService: APIService) {
    super()
  }

  connect() {
    return this.apiService.getContacts();
  }

  disconnect() {

  }
}

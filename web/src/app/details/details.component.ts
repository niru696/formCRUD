import { Component, OnInit, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { APIService } from '../api.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource  } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';
import { merge } from 'rxjs/operators';
import {fromEvent} from 'rxjs';
import Swal from 'sweetalert2'



export interface Employee {
  firstname: string;
  lastname: string;
  email: string;
  work: string;
  street: string;
  city: string;
  state : string;
  zip: string;

 }
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  checked: boolean;
   private contacts: Array<object>= [];

   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;

   //MyDataSource: any;
   displayedColumns: string[];
   dataSource = new MatTableDataSource();
   screenHeight: any;
   screenWidth: any;
   
   @HostListener('window:resize', ['$event'])
   onResize(event?) {
   this.screenHeight = window.innerHeight;
   this.screenWidth = window.innerWidth;
  // this.logger.log(`Resize() height: ${this.screenHeight}; width: ${this.screenWidth}`);
   this.setDisplayedColumns();
}

   //displayedColumns = ['firstname','lastname', 'email', 'work', 'street','city','state','zip', 'action'];
   //dataSource = new ContactDataSource(this.apiService);
 
  constructor(private route: ActivatedRoute,private apiService: APIService, private router: Router
    ) {

      this.screenHeight = window.screen.height;
      this.screenWidth = window.screen.width;
      //this.logger.log(`Init() height: ${this.screenHeight}; width: ${this.screenWidth}`);
      this.setDisplayedColumns();
     }

  ngOnInit() {
    this.getContacts1();
    this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  }


  applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
  }

 public getContacts1(){
   this.apiService.getContacts().subscribe(data =>{
     //console.log(data);
   //this.contacts.data= data;
   this.dataSource.data=data.message;
 //  console.log(this.dataSource)
 }); 
 }

onRowClicked(row){
  console.log('Row clicked: '+ row);
}

editEmployee(id) {
  this.router.navigate([`/edit-details/${id}`]);
  //console.log(id);
  }

 deleteContact(id) {
  // console.log(id);
  //this.apiService.deleteContact(id).subscribe(data =>{
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to remove it? Permanently!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      
      if (result.value) {
        this.apiService.deleteContact(id).subscribe(value =>{
          this.getContacts1();
          });
     } //else if (result.dismiss === Swal.DismissReason.cancel) {
      //   Swal.fire(
      //     'Cancelled',
      //     'Your imaginary file is safe :)',
      //     'error'
      //   )
      // }
    })
    
     
    // this.router.navigate(['/details']);
       
      
       
}

pageChanged(){
  window.location.hash = '#top';
  setTimeout(() => this.dataSource.paginator = this.paginator);
}



getFullName(contact: Employee) : string {
  return `${contact.firstname} ${contact.lastname}`;
}

getAddress(contact: Employee) : string {
  return `${contact.street} ${contact.city}, ${contact.state}, ${contact.zip}`;
}

/**
* Update a list of table columns to be displayed based on the width of the screen.
*/
setDisplayedColumns() {
  if (this.screenWidth < 420) {
      this.displayedColumns = ['firstname', 'work', 'action'];
  }
  else if (this.screenWidth >= 420 && this.screenWidth <= 800) {
      this.displayedColumns = ['firstname', 'email', 'work', 'state', 'action'];
  }
  else {
      this.displayedColumns = ['firstname', 'email', 'work', 'address', 'action'];
  }
}
 

}


// export class ContactDataSource extends DataSource<any> {
//   //@ViewChild(MatPaginator) paginator: MatPaginator;
//   constructor(private apiService: APIService) {
//     super()
//   }

//   connect() {
//     return this.apiService.getContacts();
//   }

//   disconnect() {

//   }
// }

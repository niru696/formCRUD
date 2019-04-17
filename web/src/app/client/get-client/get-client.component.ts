import { Component, OnInit } from '@angular/core';
import { OfficeService } from 'src/app/service/office.service';
import Office from 'src/app/service/Office';
import { MatPaginator, MatSort, MatTableDataSource  } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-get-client',
  templateUrl: './get-client.component.html',
  styleUrls: ['./get-client.component.css']
})
export class GetClientComponent implements OnInit {
  dataSource = new MatTableDataSource();
  businesses: Office[];
  constructor(private os:OfficeService) { }
  displayedColumns = ['client_name','port', 'DB', 'action'];
  ngOnInit() {
  this.getClient();
  } 

  getClient(){
    this.os.getBusinesses()
      .subscribe((data: Office[]) => {
        this.businesses = data;
        this.dataSource.data=data;
        console.log(DataSource);
    });
  }
  deleteBusiness(id) {
//     this.os.deleteBusiness(id).subscribe(res => {
//       console.log('Deleted');
// this.getClient();
//     });


    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to remove it? Permanently!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      
      if (result.value) {
        this.os.deleteBusiness(id).subscribe(value =>{
          this.getClient();
          });
     } //else if (result.dismiss === Swal.DismissReason.cancel) {
      //   Swal.fire(
      //     'Cancelled',
      //     'Your imaginary file is safe :)',
      //     'error'
      //   )
      // }
    })
    
  }

}

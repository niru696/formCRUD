import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { OfficeService } from 'src/app/service/office.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  
  business: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: OfficeService,
    private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
        client_name: ['', Validators.required ] 
      });
    }

updateBusiness(client_name ) {
   this.route.params.subscribe(params => {
      this.bs.updateBusiness(client_name , params['id']);
      this.router.navigate(['/get/client']);
});
}

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.bs.editBusiness(params['id']).subscribe(res => {
          this.business = res;
      });
    });
  }

}

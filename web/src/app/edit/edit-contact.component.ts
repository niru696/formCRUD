import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  empid: string;
  id;
  contact;
  constructor(private route: ActivatedRoute, private router: Router, 
    private apiService: APIService, private formBuilder: FormBuilder) {}

  private contacts: Array<object>= [];
  bookForm: FormGroup;
  firstname: String='';
  lastname: String='';
  email: String='';
  work: String='';
  street: String='';
  city: String='';
  state: String='';
  zip: String='';

  ngOnInit() {
   this.route.paramMap.subscribe(params => {
     const id = params.get('Id')
     console.log(id); 
    
     this.getContact(id);
     this.empid=id;
   });

   
  
    //console.log(this.id);
    this.bookForm = this.formBuilder.group({
      // 'firstname' : [null, Validators.required],
      // 'lastname' : [null, Validators.required],
      // 'email' : [null, Validators.required],
      // 'work' : [null, Validators.required],
      // 'street' : [null, Validators.required],
      // 'city' : [null, Validators.required],
      // 'state' : [null, Validators.required],
      // 'zip' : [null, Validators.required]

      firstname: new FormControl(null, Validators.compose([
        Validators.maxLength(15),
        Validators.minLength(4),
        Validators.required
      ])),
      'lastname': new FormControl(null, Validators.compose([
        
        Validators.maxLength(15),
        Validators.minLength(5),
        Validators.required
      ])),
     'email': new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    'work': new FormControl(null, Validators.compose([
      Validators.maxLength(15),
      Validators.minLength(2),
      Validators.required
    ])),
    'street': new FormControl(null, Validators.compose([
      Validators.maxLength(20),
      Validators.minLength(6),
      Validators.required
    ])),
      'city': new FormControl(null, Validators.compose([
        Validators.maxLength(15),
        Validators.minLength(2),
        Validators.required
      ])),
      'state': new FormControl(null, Validators.compose([
        
        Validators.maxLength(15),
        Validators.minLength(2),
        Validators.required
      ])),
      'zip': new FormControl(null, Validators.compose([
        Validators.maxLength(6),
        Validators.minLength(5),
        Validators.pattern('^(0|[1-9][0-9]*)$'),
        Validators.required
      ])),
    });
  }

  getContact(empid) {
    this.apiService.getContact(empid).subscribe(data => {
      this.id = data._id;
     console.log(this.id);
      this.bookForm.patchValue({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        work: data.work,
        street: data.street,
        city: data.city,
        state:data.state,
        zip:data.zip
      });
      this.contact=data.firstname;
      console.log(this.contact);
    });
  }


  // getContact(id) {
  //   this.apiService.getContact(id).subscribe(res => {
  //   this.contacts = res;
  //   this.bookForm.patchValue({
  //       firstname: contacts.firstname,
  //       lastname: data.lastname,
  //       email: data.email,
  //       work: data.work,
  //       street: data.street,
  //       city: data.city,
  //       state:data.state,
  //       zip:data.state
  //   });
  //   });
  //   }


  onFormSubmit(form:NgForm) {
    console.log(this.empid);
    this.apiService.updateContact(this.empid, form)
      .subscribe(res => {
          //let id = res['_id'];
          this.router.navigate(['/details']);
        }
      );
  }

  
}

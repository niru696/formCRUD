import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';

import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  checked: boolean;
  isLinear = true;
  contacts;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  


  // bookForm: FormGroup;
  firstname: String='';
  lastname: String='';
  email: String='';


  work: String='';
  street: String='';
  city: String='';
  state: String='';
  zip: String='';

  constructor( private router: Router, private apiService: APIService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      //'firstname' : [null, Validators.required],
      
      firstname: new FormControl(null, Validators.compose([
        //this.capitalizeFirstLetter(this.firstname),
        Validators.maxLength(15),
        Validators.minLength(4),
        //Validators.pattern('^([a-zA-Z])'),
        Validators.required
      ])),
      

      //'lastname' : [null, Validators.required],
      'lastname': new FormControl(null, Validators.compose([
        
        Validators.maxLength(15),
        Validators.minLength(5),
        //Validators.pattern('^([a-zA-Z])'),
        Validators.required
      ])),
	
     // 'email' : [null, Validators.required],
     'email': new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ]))
      // 'work' : [null, Validators.required],
      // 'street' : [null, Validators.required],
      // 'city' : [null, Validators.required],
      // 'state' : [null, Validators.required],
      // 'zip' : [null, Validators.required]
   
   
     });
     
    this.secondFormGroup = this.formBuilder.group({
      //'work' : [null, Validators.required],
      'work': new FormControl(null, Validators.compose([
        
        Validators.maxLength(15),
        Validators.minLength(2),
        //Validators.pattern('^([a-zA-Z])'),
        Validators.required
      ])),
    });

    this.thirdFormGroup = this.formBuilder.group({
     // 'street' : [null, Validators.required],
     'street': new FormControl(null, Validators.compose([
        
      Validators.maxLength(20),
      Validators.minLength(4),
      //Validators.pattern('^([a-zA-Z])'),
      Validators.required
    ])),
      //'city' : [null, Validators.required],
      'city': new FormControl(null, Validators.compose([
        
        Validators.maxLength(15),
        Validators.minLength(2),
        //Validators.pattern('^([a-zA-Z])'),
        Validators.required
      ])),
      //'state' : [null, Validators.required],
      'state': new FormControl(null, Validators.compose([
        
        Validators.maxLength(15),
        Validators.minLength(2),
        //Validators.pattern('^([a-zA-Z])'),
        Validators.required
      ])),
      //'zip' : [null, Validators.required]
      'zip': new FormControl(null, Validators.compose([
        
        Validators.maxLength(6),
        Validators.minLength(5),
        Validators.pattern('^(0|[1-9][0-9]*)$'),
        Validators.required
      ])),
    });
 

  }



//   buildPersonalForm(): void {
//     this.firstFormGroup = this.formBuilder.group({
//         'firstName': ['', Validators.required],
//         'lastName': ['', Validators.required],
//         'email': ['', [Validators.required, Validators.email] ] 
//     });
// }

// buildWorkForm(): void {
//     this.secondFormGroup = this.formBuilder.group({
//         'work': ['', Validators.required]
//     });
// }
  
// buildAddressForm(): void {
//     this.thirdFormGroup = this.formBuilder.group({
//         'street': ['', Validators.required],
//         'city': ['', Validators.required],
//         'state': ['', Validators.required ], 
//         'zip': ['', Validators.required],
//     });
// }
capitalizeFirstLetter(firstname) {
  return firstname[0].toUpperCase() + firstname.slice(1);
}




  onFormSubmit(form:NgForm) {
    //console.log(form);
   if(form){ this.apiService.createContact(form)
      .subscribe((data: Array<Object> ) => {
          // let id = data['_id'];
          // this.router.navigate(['/details', id]);
         // this.contacts=data;
          console.log("Sussesfully submitted")
         // console.log(this.contacts);
          
        });
  }
  
}
changePath(){
  this.router.navigate(['/details']);

}

}

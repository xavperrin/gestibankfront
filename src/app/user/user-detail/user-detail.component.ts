import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/models/address';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [UserService]
})
export class UserDetailComponent implements OnInit {

  utilisateur:User=null;
  userForm : FormGroup;
  id:number;
  private sub: any;

  constructor(private userService:UserService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    // ecouteur sur l'URL
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    // Vérification de la validité des champs
    this.userForm = new FormGroup({
      firstname: new FormControl('',Validators.required),
      lastname: new FormControl('',Validators.required),
      gender: new FormControl('',Validators.required),
      streetNumber: new FormControl('',Validators.required),
      street: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
      zipcode: new FormControl('',Validators.required),
      country: new FormControl('',Validators.required),
      email: new FormControl('',[
        Validators.required,
//        Validators.pattern("[^@]*@[^@]*")
        Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")
      ])
    })

    // Réupération (pour affichage) des infos du User si son id est précisé dans l'URL
    if(this.id){
      this.utilisateur = this.userService.findUserById(this.id);
      this.userForm.patchValue({
        firstname: this.utilisateur.firstname,
        lastname:this.utilisateur.lastname,
        gender:this.utilisateur.gender,
        streetNumber: this.utilisateur.address.streetNumber,
        street:this.utilisateur.address.street,
        city:this.utilisateur.address.city,
        zipcode:this.utilisateur.address.zipcode,
        country:this.utilisateur.address.country,
        email: this.utilisateur.email
      })
    }

  }

  /**
   * cette methode effectue un SaveOrUpdate action selon l'id
   */
  onSubmit(){
    if (this.userForm.valid){
      if (this.utilisateur == null){
        
      this.utilisateur = new User(null, 
      this.userForm.controls['firstname'].value,
      this.userForm.controls['lastname'].value,
      this.userForm.controls['gender'].value,
      new Address(
      this.userForm.controls['streetNumber'].value,
      this.userForm.controls['street'].value,
      this.userForm.controls['city'].value,
      this.userForm.controls['zipcode'].value,
      this.userForm.controls['country'].value
      ),
      this.userForm.controls['email'].value
      )
      this.userService.saveUser(this.utilisateur);
    }
    else
      this.onUpdate();
  }
    this.userForm.reset();
    this.router.navigate(['/user']);
  }

  onUpdate(){
    this.utilisateur = new User(this.utilisateur.id,
      this.userForm.controls['firstname'].value,
      this.userForm.controls['lastname'].value,
      this.userForm.controls['gender'].value,
      new Address(
      this.userForm.controls['streetNumber'].value,
      this.userForm.controls['street'].value,
      this.userForm.controls['city'].value,
      this.userForm.controls['zipcode'].value,
      this.userForm.controls['country'].value
      ),
      this.userForm.controls['email'].value
      );  
    this.userService.updateUser(this.utilisateur);
  }

  redirectUserPage(){
    this.router.navigate(['/user']);
  }
}
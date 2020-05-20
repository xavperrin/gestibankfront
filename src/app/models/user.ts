import { Address } from './address';

export class User {
    id : number;
    firstname : string;
    lastname : string;
    gender : string;
    address : Address;
    email : string;


    constructor(id : number, firstname : string, lastname : string, gender : string, address : Address, email : string ){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.address = address;
        this.email = email;
    }
}
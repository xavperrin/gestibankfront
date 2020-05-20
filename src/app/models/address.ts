export class Address {

    streetNumber : number;
    street : string;
    city : string;
    zipcode : string;
    country : string;


    constructor(streetNumber : number, street : string, city : string, zipcode : string, country : string){
        this.streetNumber = streetNumber;
        this.street = street;
        this.city = city;
        this.zipcode = zipcode;
        this.country = country;
    }
}
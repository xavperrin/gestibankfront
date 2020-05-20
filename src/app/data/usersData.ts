import { User } from '../models/user';

export const USERS: User[] = [
    {
        id:1,
        firstname : 'Jean',
        lastname : 'Bon',
        gender : 'Homme',
        address: {
            streetNumber : 52,
            street : 'Rue du general leclerc',
            city : 'Paris',
            zipcode : '75001',
            country : 'France'
        },
        email : 'max@gmail.com'
    },
    {
        id:2,
        firstname : 'Charlolivier',
        lastname : 'De Lamarre',
        gender : 'Non-binaire',
        address: {
            streetNumber : 105,
            street : 'Avenue Jean Jaures',
            city : 'Marseille',
            zipcode : '13001',
            country : 'France'
        },
        email : 'charloli@gmail.com'
    },
    {
        id:3,
        firstname : 'Mireille',
        lastname : 'Mathieu',
        gender : 'Femme',
        address: {
            streetNumber : 2,
            street : 'Plaça del Mar',
            city : 'Barcelone',
            zipcode : '08040',
            country : 'Espagne'
        },
        email : 'MireilleMOfficiel@lycos.es'
    }
];
import { User } from '../models/user';
import { Injectable } from '@angular/core';
import {USERS} from '../data/usersData'

@Injectable()
export class UserService{    
    /**
     * Cette fonction permet de récuperer la liste des utilisateurs
     */
    findAll():User[] {
        return USERS;
    }

    /**
     * Fonction d'ajout d'un utilisateur
     */
    saveUser(user:User):void{
        if (user.id == null){
            user.id = USERS.length + 1;
            USERS.push(user);
        }
    }

    /**
     * Il a été définit que la suppression serait géré dans les classes filles pour ne pas avoir de problème sur la gestion des ID
     */
    /*
    deleteUser(user:User):void{
        let idx;
        idx = USERS.indexOf(user);
        if (idx >=0){
            USERS.splice(idx,1);
        }
        this.findAll();
    }
    */

    updateUser(user:User):void {
        var OldUser = this.findUserById(user.id);
        let idx;
        idx = USERS.indexOf(OldUser);
        if (idx >=0)
        {
            USERS.splice(idx,1,user)
        }
    }

    findUserById(id:number):User {
        var curentUser:any;
        for (var i = 0 ; i < USERS.length; i++){
            curentUser = USERS[i];

            if (curentUser.id == id)
                return curentUser;        }
    }

}
import { Injectable } from '@angular/core';
import { User } from '../models/User';


@Injectable()
export class StoreDataService
{
    accno:number;
    ifsc:string;
    currUser:User;
    firstname:string;
    middlename:string;
    lastname:string;
    dob:Date;
    phone:number;
    gender:string;
    nationality:string;
    proploc:string;
    propname:string;
    propamt:number;
    orgtype:string;
    retage:number;
    emptype:string;
    empname:string;
    loanwanted:number;
    tenure:number;
    rate:number;
    eligibleamount:number;
    constructor()
    {
        this.currUser=new User();
    }
}
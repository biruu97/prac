import { Application } from './application';

export class LoanApprover
{
    remarks:string;
    adminId:number;
    newApplication:Application;

    constructor()
    {
        this.newApplication=new Application();
    }
}
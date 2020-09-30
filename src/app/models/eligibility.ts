import { User } from './User';

export class Eligibility
{
    user:User;
    sal:number;
    constructor()
    {
        this.user=new User();
        this.sal=0;
    }
}
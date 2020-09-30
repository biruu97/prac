import { BankDetail } from './bankDetail';
import { IncomeDetail } from './incomeDetail';
import { LoanDetails } from './loanDetail';
import { Mydocuments } from './mydocuments';
import { PersonalDetails } from './pesonalDetails';

export class NewApplication
{
    ld:LoanDetails;
    idt:IncomeDetail;
    pd:PersonalDetails;
    bd:BankDetail;
    dc:Mydocuments;
    constructor()
    {
        this.ld=new LoanDetails();
        this.idt=new IncomeDetail();
        this.pd=new PersonalDetails();
        this.bd=new BankDetail();
        this.dc=new Mydocuments();
    }
}
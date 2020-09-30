import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Application } from '../models/application';
import { Eligibility } from '../models/eligibility';
import { LoanApprover } from '../models/loanApprover';
import { User } from '../models/User';

@Injectable()
export class UserService
{
    constructor
    (private http1:HttpClient,private http2:HttpClient,private http3:HttpClient,
     private http4:HttpClient,private http5:HttpClient,private http6:HttpClient,
     private http7:HttpClient,private http8:HttpClient,private http9:HttpClient,
     private http10:HttpClient,private http11:HttpClient,private http12:HttpClient,
     private http13:HttpClient,private http14:HttpClient,private http15:HttpClient,
     private http16:HttpClient,private http17:HttpClient,private http18:HttpClient,private http19:HttpClient)
    {}
    checkEmailfromAPI(email:string)
    {
        return this.http1.get("http://localhost:61494/api/PersonalDetail?email="+email);
    }

    getLoginfromAPI(user:User)
    {
        return this.http2.post("http://localhost:61494/api/Login",user);
    }

    addUsertoAPI(user:User)
    {
        return this.http3.post("http://localhost:61494/api/Registration",user);
    }

    addUsertoAPIfromPersonal(user:User)
    {
        return this.http4.post("http://localhost:61494/api/GetUser",user);
    }

    
    getPreviousRecords(user:User)
    {
        return this.http5.post("http://localhost:61494/api/PreviousRecords",user);
    }

    getEligibleAmtFromAPI(e:Eligibility)
    {
        return this.http6.post("http://localhost:61494/api/Eligibility",e);
    }

    getPersonalDetails(user : User)
    {
        return this.http7.post("http://localhost:61494/api/ShowPersonalDetails",user);
    }

    getBankDetails(user: User)
    {
        return this.http8.post("http://localhost:61494/api/showBankDetails",user);
    }

    getLoanDetails(user:User)
    {
        return this.http9.post("http://localhost:61494/api/showLoanDetails",user)
    }
    

    createNewApplication(user:User)
    {
        return this.http10.post("http://localhost:61494/api/CreateNewApplication",user);
    }

    storePics(appid:number,filea:File,filep:File,fileloa:File,fileloc:File,filevote:File,filesale:File)
    {
        const fd=new FormData();
        fd.append('imageAadhar',filea,appid.toString()+filea.name);
        fd.append('imagePan',filep,appid.toString()+filep.name);
        fd.append('imageLOA',fileloa,appid.toString()+fileloa.name);
        fd.append('imageLOC',fileloc,appid.toString()+fileloc.name);
        fd.append('imageVoter',filevote,appid.toString()+filevote.name);
        fd.append('imageSaleAgr',filesale,appid.toString()+filesale.name);

        return this.http11.post("http://localhost:61494/api/StorePictures",fd);
    }

    updatePass(user:User)
    {
        return this.http12.post("http://localhost:61494/api/UpdatePass",user);
    }

    getNewOTP()
    {
        return this.http13.get("http://localhost:61494/api/GetOTP");
    }

    getApplicationsForApproval(user:User)
    {
        return this.http14.post("http://localhost:61494/api/ApplicationsForApproval",user);
    }

    getIncomeDetailsForApproval(user:User)
    {
        return this.http15.post("http://localhost:61494/api/IncomeDetailsForApproval",user);
    }

    getLoanDetailsForApproval(user:User)
    {
        return this.http16.post("http://localhost:61494/api/LoanDetailsForApproval",user);
    }

    disapproveLoan(app:Application)
    {
        return this.http17.put("http://localhost:61494/api/DisapproveLoan",app);
    }

    approveLoan(lp:LoanApprover)
    {
        return this.http18.post("http://localhost:61494/api/ApproveLoan",lp);
    }

    getDocuments(user:User)
    {
        return this.http19.post("http://localhost:61494/api/GettingDocuments",user);
    }

}
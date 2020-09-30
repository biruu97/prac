import { Component, OnInit } from '@angular/core';
import { StoreDataService } from '../services/StoreDataService';
import {User} from '../models/user';
import { PersonalDetails } from '../models/pesonalDetails';
import { UserService } from '../services/UserService';
import { IncomeDetail } from '../models/incomeDetail';
import { LoanDetails } from '../models/loanDetail';
import { NewApplication } from '../models/newapplication';
import { BankDetail } from '../models/bankDetail';
import { HttpClient } from '@angular/common/http';
import { Mydocuments } from '../models/mydocuments';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doc-upload',
  templateUrl: './doc-upload.component.html',
  styleUrls: ['./doc-upload.component.css']
})
export class DocUploadComponent implements OnInit {
  anumber:number;
  pnumber:string;
  fileAadhar=null;
  filePan=null;
  fileLOA=null;
  fileLOC=null;
  fileVoter=null;
  fileSaleAgr=null;
  appid:number;
  newpersonaldetail:PersonalDetails;
  newincomedetail:IncomeDetail;
  newloandetail:LoanDetails;
  newbankdetail:BankDetail;
  mydocs:Mydocuments;
  newcompleteapplication:NewApplication;
  constructor(private myRoute:Router,private http1:HttpClient,private http2:HttpClient,private sd:StoreDataService,private userService:UserService) {
      this.userService.createNewApplication(sd.currUser).subscribe((data)=>{
        this.appid=<number>data;
        console.log("new appid="+this.appid);
      });
   }

  onFileSelected1(event)
  {
    this.fileAadhar=event.target.files[0];
  }
  onFileSelected2(event)
  {
    this.filePan=event.target.files[0];

  }
  onFileSelected3(event)
  {
    this.fileLOA=event.target.files[0];
  }
  onFileSelected4(event)
  {
    this.fileLOC=event.target.files[0];
  }
  onFileSelected5(event)
  {
    this.fileVoter=event.target.files[0];
  }
  onFileSelected6(event)
  {
    this.fileSaleAgr=event.target.files[0];
  }


  sendPictoBackend()
  {
      console.log(this.fileAadhar.name);
      this.userService.storePics(this.appid,this.fileAadhar,this.filePan,this.fileLOA,this.fileLOC,this.fileVoter,this.fileSaleAgr).subscribe();
  }
 

  submitForm()
  {

      this.newpersonaldetail=new PersonalDetails();
      this.newpersonaldetail.firstName=this.sd.firstname;
      this.newpersonaldetail.middleName=this.sd.middlename;
      this.newpersonaldetail.lastName=this.sd.lastname;
      this.newpersonaldetail.gender=this.sd.gender;
      this.newpersonaldetail.nationality=this.sd.nationality;
      this.newpersonaldetail.phoneNumber=this.sd.phone;
      this.newpersonaldetail.DOB=this.sd.dob;
      this.newpersonaldetail.appId=this.appid;

      this.newincomedetail=new IncomeDetail();
      this.newincomedetail.appId=this.appid;
      this.newincomedetail.empType=this.sd.emptype;
      this.newincomedetail.employer=this.sd.empname;
      this.newincomedetail.orgType=this.sd.orgtype;
      this.newincomedetail.propName=this.sd.propname;
      this.newincomedetail.propLoc=this.sd.proploc;
      this.newincomedetail.propAmount=this.sd.propamt;
      this.newincomedetail.retirementAge=this.sd.retage;
      
      this.newloandetail=new LoanDetails();
      this.newloandetail.appId=this.appid;
      this.newloandetail.rate=this.sd.rate;
      this.newloandetail.tenure=this.sd.tenure;
      this.newloandetail.loanAsked=this.sd.loanwanted;
      this.newloandetail.maxAmtGrantable=this.sd.eligibleamount;

      //accno,ifsc
      this.newbankdetail=new BankDetail();
      this.newbankdetail.ifsc=this.sd.ifsc;
      this.newbankdetail.accNo=this.sd.accno;
      this.newbankdetail.appId=this.appid;


      this.mydocs=new Mydocuments();
      this.mydocs.appId=this.appid;
      this.mydocs.aadharNumber=this.anumber;
      this.mydocs.PAN=this.pnumber;
      this.mydocs.aadharDoc=this.appid.toString()+this.fileAadhar.name;
      this.mydocs.PANDoc=this.appid.toString()+this.filePan.name;
      this.mydocs.LOA=this.appid.toString()+this.fileLOA.name;
      this.mydocs.LOC=this.appid.toString()+this.fileLOC.name;
      this.mydocs.voterID=this.appid.toString()+this.fileVoter.name;
      this.mydocs.agreement=this.appid.toString()+this.fileSaleAgr.name;

     this.newcompleteapplication=new NewApplication();
     this.newcompleteapplication.idt=this.newincomedetail;
     this.newcompleteapplication.ld=this.newloandetail;
     this.newcompleteapplication.pd=this.newpersonaldetail;
     this.newcompleteapplication.bd=this.newbankdetail;
     this.newcompleteapplication.dc=this.mydocs;

     this.sendPictoBackend();
     console.log("picsent");

     this.http2.post("http://localhost:61494/api/SubmitApplication",this.newcompleteapplication).subscribe((data)=>{
       console.log("application submitted");
       this.newcompleteapplication=new NewApplication();
       this.sd.accno=null;
       this.sd.ifsc=null;
       this.sd.currUser=null;
       this.sd.firstname=null;
       this.sd.middlename=null;
       this.sd.lastname=null;
       this.sd.dob=null;
       this.sd.phone=null;
       this.sd.gender=null;
       this.sd.nationality=null;
       this.sd.proploc=null;
       this.sd.propname=null;
       this.sd.propamt=null;
       this.sd.orgtype=null;
       this.sd.retage=null;
       this.sd.emptype=null;
       this.sd.empname=null;
       this.sd.loanwanted=null;
       this.sd.tenure=null
       this.sd.rate=null;
       this.sd.eligibleamount=null;
       this.myRoute.navigate(['*']);
     });

    
  }
  
  ngOnInit(): void {
  }

}

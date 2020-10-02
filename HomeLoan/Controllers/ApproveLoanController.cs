using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using HomeLoan.Models;

namespace HomeLoan.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class ApproveLoanController : ApiController
    {
        homeloanEntities hle = new homeloanEntities();

        public string Post([FromBody]LoanApprover loanApprover)
        {
            loanApprover.newApplication.status = "success";
            hle.Entry(loanApprover.newApplication).State = System.Data.Entity.EntityState.Modified;
            hle.SaveChanges();

            loan newLoan = new loan();
            loanDetail newloandet = new loanDetail();
            newloandet = hle.loanDetails.ToList().Find(item => item.appId == loanApprover.newApplication.appId);

            newLoan.adminId = loanApprover.adminId;
            newLoan.remarks = loanApprover.remarks;
            newLoan.loanId = loanApprover.newApplication.appId;
            newLoan.status = "current";
            newLoan.loanDateStart = System.DateTime.Now;
            newLoan.amountApproved = newloandet.loanAsked;
            newLoan.noOfEmiTotal = hle.loanDetails.ToList().Find(item => item.appId == newLoan.loanId).tenure * 12;
            newLoan.noOfEmiLeft = newLoan.noOfEmiTotal;

            hle.loans.Add(newLoan);
            hle.SaveChanges();


            return "loan has been approved";
        }
    }
}

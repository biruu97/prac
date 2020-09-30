using HomeLoan.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace HomeLoan.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class EligibilityController : ApiController
    {
        homeloanEntities hle = new homeloanEntities();
        public int Post([FromBody]Eligibility eligibility)
        {
            int val = 0;
            List<application> app = hle.applications.ToList().FindAll(item=>item.loginid==eligibility.user.id && item.status=="success");

            List<loan> loans = new List<loan>();

            foreach (var item in app)
                loans.Add(hle.loans.ToList().Find(item1 => item1.loanId == item.appId && item1.noOfEmiLeft>0));

            foreach (var item in loans)
                if (item!=null && item.noOfEmiLeft > 0)
                    val += item.amountApproved / item.noOfEmiTotal;

            return val;
        }
    }
}

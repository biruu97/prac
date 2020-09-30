using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using HomeLoan.Models;
using System.Web.Http.Cors;


namespace HomeLoan.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class SubmitApplicationController : ApiController
    {
        homeloanEntities hle = new homeloanEntities();
        public string Post([FromBody]NewApplication newApplication)
        {
            hle.loanDetails.Add(newApplication.ld);
            hle.SaveChanges();
            hle.userBankDetails.Add(newApplication.bd);
            hle.SaveChanges();
            hle.incomeDetails.Add(newApplication.idt);
            hle.SaveChanges();
            hle.personalDetails.Add(newApplication.pd);
            hle.SaveChanges();
            hle.documents.Add(newApplication.dc);
            hle.SaveChanges();
            return "app submitted";
        }
    }
}

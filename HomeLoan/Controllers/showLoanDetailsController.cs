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
    public class showLoanDetailsController : ApiController
    {
        homeloanEntities hle = new homeloanEntities();

        public List<loanDetail> Post([FromBody] login user)
        {
            List<loanDetail> records = new List<loanDetail>();

            login applicant = new login();
            applicant = user;
            long id = user.id;
            foreach (var app in hle.applications.ToList())
            {
                if (app.loginid == id)
                {
                    foreach (var rec in hle.loanDetails.ToList())
                    {
                        if (app.appId == rec.appId)
                        {
                            records.Add(rec);
                        }
                    }
                }
            }
            return records;
        }
    }
}

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
    public class LoanDetailsForApprovalController : ApiController
    {
        homeloanEntities hle = new homeloanEntities();

        public List<loanDetail> Post([FromBody] login user)
        {
            List<loanDetail> records = new List<loanDetail>();
            foreach (var app in hle.applications.ToList())
                if ((app.loginid != user.id) && (app.status == "processing"))
                    foreach (var loanDet in hle.loanDetails.ToList())
                        if (app.appId == loanDet.appId)
                            records.Add(loanDet);

            return records;
        }
    }
}

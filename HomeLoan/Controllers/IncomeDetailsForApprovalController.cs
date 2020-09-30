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
    public class IncomeDetailsForApprovalController : ApiController
    {
        homeloanEntities hle = new homeloanEntities();
        public List<incomeDetail> Post([FromBody] login user)
        {
            List<incomeDetail> records = new List<incomeDetail>();
            foreach (var app in hle.applications.ToList())
                if ((app.loginid != user.id) && (app.status == "processing"))
                    foreach (var incDet in hle.incomeDetails.ToList())
                        if (app.appId == incDet.appId)
                            records.Add(incDet);

            return records;
        }
    }
}

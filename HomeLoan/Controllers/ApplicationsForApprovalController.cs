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
    public class ApplicationsForApprovalController : ApiController
    {
        homeloanEntities hle = new homeloanEntities();

        public List<application> Post([FromBody] login user)
        {
            List<application> records = new List<application>();
            foreach (var app in hle.applications.ToList())
                if ((app.loginid != user.id) && (app.status == "processing"))
                    records.Add(app);
            return records;
        }
    }
}

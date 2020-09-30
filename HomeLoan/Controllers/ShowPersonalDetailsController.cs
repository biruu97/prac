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
    public class ShowPersonalDetailsController : ApiController
    {
        homeloanEntities hle = new homeloanEntities();

        public personalDetail Post([FromBody] login user)
        {
            personalDetail record = new personalDetail();

            login applicant = new login();
            applicant = user;
            long id = user.id;
            foreach (var app in hle.applications.ToList())
            {
                if (app.loginid == id)
                {
                    foreach (var rec in hle.personalDetails.ToList())
                    {
                        if (app.appId == rec.appId)
                        {
                            record = rec;
                            return record;
                        }
                    }
                }
            }
            return null;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Metadata.Edm;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using HomeLoan.Models;

namespace HomeLoan.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class CreateNewApplicationController : ApiController
    {
        homeloanEntities hle = new homeloanEntities();

        public long Post([FromBody]login newuser)
        {
            application newApplication = new application();
            newApplication.loginid = newuser.id;
            newApplication.status = "processing";

            hle.applications.Add(newApplication);
            hle.SaveChanges();

            long res=hle.applications.ToList().Max(item => item.appId);

            return res;
        }
    }
}

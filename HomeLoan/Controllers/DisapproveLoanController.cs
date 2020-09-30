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
    public class DisapproveLoanController : ApiController
    {
        homeloanEntities hle = new homeloanEntities();

        public string Put([FromBody]application app)
        {
            app.status = "rejected";

            hle.Entry(app).State = System.Data.Entity.EntityState.Modified;
            hle.SaveChanges();

            return "loan has been rejected";
        }
    }
}

using HomeLoan.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace HomeLoan.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class UpdatePassController : ApiController
    {
        homeloanEntities hle = new homeloanEntities();
        public string Post([FromBody]login newuser)
        {

            login mylogin = new login();
            mylogin = hle.logins.ToList().Find(item=>item.email==newuser.email);
            mylogin.password = newuser.password;
            hle.Entry(mylogin).State = EntityState.Modified;
            hle.SaveChanges();
            return "password successfully updated";
        }
    }
}

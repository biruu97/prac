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
    public class LoginController : ApiController
    {
        homeloanEntities hle = new homeloanEntities();


        public string Get(int id)
        {
            return hle.personalDetails.ToList().Find(item => item.appId ==(hle.applications.ToList().Find(i=>i.loginid==id)).appId).firstName;
        }
        public login Post([FromBody]login user)
        {
            login currUser = new login();
            currUser=hle.logins.ToList().Find(item => item.email == user.email && item.password == user.password);
            return currUser;
        }
    }
}

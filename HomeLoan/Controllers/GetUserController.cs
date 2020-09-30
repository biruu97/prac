using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.UI;
using HomeLoan.Models;
namespace HomeLoan.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class GetUserController : ApiController
    {
        homeloanEntities hle = new homeloanEntities();
        public string Get()
        {
            return "Wfref";
        }
        public login Post([FromBody]login user)
        {
            login newuser = new login();
            newuser.email = user.email;
            newuser.password = user.password;
            newuser.privilege = user.privilege;
            hle.logins.Add(newuser);
            hle.SaveChanges();
            return newuser; 
        }
    }
}

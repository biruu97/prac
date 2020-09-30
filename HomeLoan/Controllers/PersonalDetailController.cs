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
    public class PersonalDetailController : ApiController
    {
        homeloanEntities hle = new homeloanEntities();
        public string Get(String email)
        {
            login mylogin = new login();
            mylogin = hle.logins.ToList().Find(item => item.email == email);
            if (mylogin != null)
                return "exists";
            else
                return "new";
        }
    }
}

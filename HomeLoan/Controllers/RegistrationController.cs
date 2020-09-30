using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using HomeLoan.Models;
using System.Web.Cors;
using System.Web.Http.Cors;

namespace HomeLoan.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]

    public class RegistrationController : ApiController
    {
        homeloanEntities hle = new homeloanEntities();

        // for userlogin
        

        // for user registration
        public string Post(login user)
        {
            login newuser = new login();
            newuser.email = user.email;
            newuser.password = user.password;
            newuser.privilege = user.privilege;
            login getuser = hle.logins.ToList().Find(useritem => useritem.email == user.email);
            if (getuser != null)
                return "USER ALREADY EXISTS IN THE RECORDS!!";
            hle.logins.Add(newuser);
            hle.SaveChanges();
            return "USER SUCESSFULLY REGISTERED!!";
        }
    }
}

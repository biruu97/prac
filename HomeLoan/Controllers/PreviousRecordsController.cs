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
    public class PreviousRecordsController : ApiController
    {
        homeloanEntities hle = new homeloanEntities();

        public List<application> Post([FromBody]login user)
        {
            return hle.applications.ToList().FindAll(item=>item.loginid==user.id);
        }
    }
}

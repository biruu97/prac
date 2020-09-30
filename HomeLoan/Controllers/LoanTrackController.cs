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
    public class LoanTrackController : ApiController
    {
        homeloanEntities hle = new homeloanEntities();
        // POST: api/LoanTrack
        public application Post([FromBody]LoanTrack loanTrack)
        {
            application app = new application();
            if (hle.personalDetails.ToList().Find(item => item.appId == loanTrack.appid && item.phoneNumber == loanTrack.phone) != null)
                app = hle.applications.ToList().Find(item=>item.appId==loanTrack.appid);
            return app;
        }

        
    }
}

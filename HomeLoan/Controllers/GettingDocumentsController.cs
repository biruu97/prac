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
    public class GettingDocumentsController : ApiController
    {
        homeloanEntities hle = new homeloanEntities();

        public List<document> Post(login mylogin)
        {
            List<document> docs = new List<document>();
            List<application> app = hle.applications.ToList().FindAll(item => item.loginid != mylogin.id && item.status == "processing");
            foreach (var item in app)
                foreach (var item1 in hle.documents.ToList())
                    if (item1.appId == item.appId)
                        docs.Add(item1);

            return docs;
                
        }
    }
}

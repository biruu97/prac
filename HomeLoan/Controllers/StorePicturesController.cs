using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace HomeLoan.Controllers
{
    public class StorePicturesController : ApiController
    {
        public string Get()
        {
            return "wdwed";
        }
        public void Post()
        {
            string Aadharname = HttpContext.Current.Request.Files["imageAadhar"].FileName;
            var postedFileAadhar = HttpContext.Current.Request.Files["imageAadhar"];
            var filePathAadhar = HttpContext.Current.Server.MapPath("~/resources/" + Aadharname);
            postedFileAadhar.SaveAs(filePathAadhar);

            string Panname = HttpContext.Current.Request.Files["imagePan"].FileName;
            var postedFilePan = HttpContext.Current.Request.Files["imagePan"];
            var filePathPan = HttpContext.Current.Server.MapPath("~/resources/" + Panname);
            postedFilePan.SaveAs(filePathPan);

            string Voterid = HttpContext.Current.Request.Files["imageVoter"].FileName;
            var postedFileVoter = HttpContext.Current.Request.Files["imageVoter"];
            var filePathVoter = HttpContext.Current.Server.MapPath("~/resources/" + Voterid);
            postedFileVoter.SaveAs(filePathVoter);

            string LOA = HttpContext.Current.Request.Files["imageLOA"].FileName;
            var postedFileLOA = HttpContext.Current.Request.Files["imageLOA"];
            var fileLOA = HttpContext.Current.Server.MapPath("~/resources/" + LOA);
            postedFileLOA.SaveAs(fileLOA);

            string LOC = HttpContext.Current.Request.Files["imageLOC"].FileName;
            var postedFileLOC = HttpContext.Current.Request.Files["imageLOC"];
            var fileLOC = HttpContext.Current.Server.MapPath("~/resources/" + LOC);
            postedFileLOC.SaveAs(fileLOC);

            string saleagr = HttpContext.Current.Request.Files["imageSaleAgr"].FileName;
            var postedFilesale = HttpContext.Current.Request.Files["imageSaleAgr"];
            var filePathsale = HttpContext.Current.Server.MapPath("~/resources/" + saleagr);
            postedFilesale.SaveAs(filePathsale);
        }
    }
}

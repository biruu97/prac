using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using HomeLoan.Models;
using System.Web.Http.Cors;
using System.Net.Mail;

namespace HomeLoan.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class GetOTPController : ApiController
    {
        public string Get()
        {
            var fromAddress = new MailAddress("testforltiproject@gmail.com", "FromName");
            var toAddress = new MailAddress("birojitmondal2@gmail.com", "ToName");
            const string fromPassword = "testforlti";
            const string subject = "otp for project";
            string body = new Random().Next(10000,99999).ToString();
            

            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
            };
            using (var message = new MailMessage(fromAddress, toAddress)
            {
                Subject = subject,
                Body = body
            })
            {
                smtp.Send(message);
            }

            return body;
        }
    }
}

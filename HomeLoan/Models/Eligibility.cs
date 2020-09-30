using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace HomeLoan.Models
{
    [DataContract]
    public class Eligibility
    {
        [DataMember]
        public login user;
        [DataMember]
        public int sal;
        Eligibility()
        {
            this.user = new login();
            this.sal = 0;
        }
        Eligibility(login l,int s)
        {
            this.user = l;
            this.sal = s;
        }
    }
}
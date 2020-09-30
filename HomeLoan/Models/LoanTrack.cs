using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace HomeLoan.Models
{
    [DataContract]
    public class LoanTrack
    {
        [DataMember]
        public int appid { get; set; }
        [DataMember]
        public int phone { get; set; }
        public LoanTrack()
        { }

        public LoanTrack(int app,int ph)
        {
            this.appid = app;
            this.phone = ph;
        }
    }
}
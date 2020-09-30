using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace HomeLoan.Models
{
    [DataContract]
    public class NewApplication
    {
        [DataMember]
        public loanDetail ld;
        [DataMember]
        public incomeDetail idt;
        [DataMember]
        public personalDetail pd;
        [DataMember]
        public userBankDetail bd;
        [DataMember]
        public document dc;

        NewApplication()
        {
            this.ld = new loanDetail();
            this.idt = new incomeDetail();
            this.bd = new userBankDetail();
            this.pd = new personalDetail();
            this.dc = new document();
        }
    }
}
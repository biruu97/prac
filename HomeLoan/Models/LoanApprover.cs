using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HomeLoan.Models
{
    public class LoanApprover
    {
        public application newApplication;
        public long adminId;
        public string remarks;

        public LoanApprover()
        {
            newApplication = new application();
        }
    }
}
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace HomeLoan.Models
{
    using System;
    using System.Collections.Generic;
    using System.Runtime.Serialization;

    [DataContract]
    public partial class loanDetail
    {
        [DataMember]
        public long appId { get; set; }
        [DataMember]
        public int maxAmtGrantable { get; set; }
        [DataMember]
        public int loanAsked { get; set; }
        [DataMember]
        public int tenure { get; set; }
        [DataMember]
        public int rate { get; set; }
    
        public virtual application application { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace dtuchatbot.Models
{
    public class Employee
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string PhoneNo { get; set; }
        public string Address { get; set; }
        public int IsAcive { get; set; }
    }
}
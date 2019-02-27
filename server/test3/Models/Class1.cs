using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
namespace test3.Models
{
    public class loginstuff
    {
        public loginstuff()
        {
        }

        public loginstuff(string username, string password)
        {
            this.username = username;
            this.username = password;
        }

        public string username { get; set; }
        public string password { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using test3.Models;
using System.Web.Http.Description;
using System.Web;

namespace test3.Controllers
{
    public class LoginController : ApiController
    {
        BoardRoomEntities boardroomdb = new BoardRoomEntities();

        //Post api/Login
        [ResponseType(typeof(loginstuff))]
        public String PostUser(loginstuff user)
        {
            if (user != null && (int)(this.boardroomdb.Login(user.username, user.password).FirstOrDefault()) == 1)
            {
                var session = HttpContext.Current.Session;
                session["username"] = user.username;
                session["userID"] = this.boardroomdb.Login1(user.username, user.password).FirstOrDefault();
                return ("Login Success");
            }
            return ("Login Failed");
        }
    }
}

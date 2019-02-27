using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using test3.Models;

namespace test3.Controllers
{
    public class AddBookingController : ApiController
    {
        BoardRoomEntities boardroomdb = new BoardRoomEntities();
        // GET api/AddBooking
        public string Get(int roomID, string begin, string stop)
        {
            char[] cut = { '\\', '\"' };
            DateTime start = DateTime.ParseExact(begin.Trim(cut), "yyyy-MM-dd HH:mm tt", null);
            DateTime end = DateTime.ParseExact(stop.Trim(cut), "yyyy-MM-dd HH:mm tt", null);
            var session = HttpContext.Current.Session;
            if ((this.boardroomdb.AddBooking((int)session["userID"], roomID, start, end).ToString()).Equals("1"))
                return ("Booking Success");
            return ("Booking Failed");
        }
    }
}

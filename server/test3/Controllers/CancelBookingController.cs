using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using test3.Models;

namespace test3.Controllers
{
    public class CancelBookingController : ApiController
    {
        BoardRoomEntities boardroomdb = new BoardRoomEntities();
        // GET api/CancelBooking
        public string Get(int roomID, int userID)
        {
            if ((this.boardroomdb.CancelBookings(roomID, userID).ToString()).Equals("1"))
                return ("Booking cancel Success");
            return ("Booking cancel Failed");
        }
    }
}

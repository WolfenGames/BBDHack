using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using test3.Models;

namespace test3.Controllers
{
    public class BookingsRController : ApiController
    {
        BoardRoomEntities boardroomdb = new BoardRoomEntities();
        // GET api/values
        public IEnumerable<GetBookingsForRoomR_Result> Get(int roomID)
        {
            return (this.boardroomdb.GetBookingsForRoomR(roomID).ToList());
        }

        // GET api/values
        public IEnumerable<GetBookingsForRoomR1_Result> Get(int roomID, string today)
        {
            char[] cut = { '\\', '\"' };
            DateTime start = DateTime.ParseExact(today.Trim(cut), "yyyy-MM-dd HH:mm tt", null);
            return (this.boardroomdb.GetBookingsForRoomR1(roomID, start).ToList());
        }
    }
}
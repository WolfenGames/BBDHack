using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using test3.Models;

namespace test3.Controllers
{
    public class BookingsUController : ApiController
    {
        BoardRoomEntities boardroomdb = new BoardRoomEntities();
        // GET api/BookingsU
        public IEnumerable<GetBookingsForRoomU_Result> Get(int userID)
        {
            return (this.boardroomdb.GetBookingsForRoomU(userID).ToList());
        }
    }
}

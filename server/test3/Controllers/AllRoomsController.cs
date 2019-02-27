using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using test3.Models;

namespace test3.Controllers
{
    public class AllRoomsController : ApiController
    {
        BoardRoomEntities boardroomdb = new BoardRoomEntities();
        // GET api/AllRooms
        public IEnumerable<GetBookingsForAllRooms_Result> Get()
        {
            return (this.boardroomdb.GetBookingsForAllRooms().ToList());
        }
    }
}

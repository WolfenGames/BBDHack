using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using test3.Models;

namespace test3.Controllers
{
    public class ValuesController : ApiController
    {
        BoardRoomEntities boardroomdb = new BoardRoomEntities();
        // GET api/values
        public IEnumerable<GetBookingsForAllRooms_Result> Get()
        {
            return (this.boardroomdb.GetBookingsForAllRooms().ToList());
           // return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}

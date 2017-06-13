using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using TrafalgarBattleAPI.Models;

namespace TrafalgarBattleAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UserController : ApiController
    {
        UserDbConnection udc = null;

        // GET api/<controller>
        public IEnumerable<User> Get()
        {
            return new List<User>();
        }

        // GET api/<controller>/5
        public User Get(string name, string password)
        {
            udc = new UserDbConnection();

            
            User user = udc.GetUser(name,password);
            return user;
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}
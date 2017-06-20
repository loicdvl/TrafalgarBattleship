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
    public class UserLoginController : ApiController
    {
        // GET: api/UserLogin
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/UserLogin/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/UserLogin
        public void Post([FromBody]UserLogin UserLogin)
        {
            
        }

        // PUT: api/UserLogin/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/UserLogin/5
        public void Delete(int id)
        {
        }
    }
}

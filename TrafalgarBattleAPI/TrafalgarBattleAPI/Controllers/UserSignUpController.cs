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
    public class UserSignUpController : ApiController
    {
        // GET: api/UserSignUp
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/UserSignUp/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/UserSignUp
        public void Post([FromBody]UserSignUp userSignUp)
        {
        }

        // PUT: api/UserSignUp/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/UserSignUp/5
        public void Delete(int id)
        {
        }
    }
}

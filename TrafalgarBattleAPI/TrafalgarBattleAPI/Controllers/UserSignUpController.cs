using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;
using TrafalgarBattleAPI.Controllers.Cryptography;
using TrafalgarBattleAPI.Models;

namespace TrafalgarBattleAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UserSignUpController : ApiController
    {
        UserDbConnection udc = null;

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
            udc = new UserDbConnection();

            if( userSignUp.Username != null && userSignUp.Password != null )
            {
                udc.InsertUser(userSignUp.Username, SHA.GenerateSHA256String(userSignUp.Password));
            }
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

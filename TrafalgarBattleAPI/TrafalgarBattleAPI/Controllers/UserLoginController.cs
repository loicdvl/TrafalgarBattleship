using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;
using TrafalgarBattleAPI.Models;

namespace TrafalgarBattleAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UserLoginController : ApiController
    {
        UserDbConnection udc = null;

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
        public User Post([FromBody]UserLogin UserLogin)
        {
            udc = new UserDbConnection();

            User user = udc.GetUser(UserLogin.Username, UserLogin.Password);

            return user;
        }
    }
}

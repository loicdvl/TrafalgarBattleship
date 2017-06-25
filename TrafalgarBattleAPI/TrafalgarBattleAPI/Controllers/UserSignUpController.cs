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

        // POST: api/UserSignUp
        public void Post([FromBody]UserSignUp userSignUp)
        {
            udc = new UserDbConnection();

            if( userSignUp.Username != null && userSignUp.Password != null )
            {
                udc.InsertUser(userSignUp.Username, SHA.GenerateSHA256String(userSignUp.Password));
            }
        }
    }
}

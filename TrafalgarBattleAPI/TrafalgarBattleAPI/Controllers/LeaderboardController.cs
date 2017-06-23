using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using TrafalgarBattleAPI.Models;

namespace TrafalgarBattleAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class LeaderboardController : ApiController
    {
        private readonly User[] _leaderboard =
        {
            new User("1","Loic"),
            new User("2","Lucie"),
            new User("3","Choustof"),
            new User("4","Glodie")
        };
       
        // GET api/<controller>
        public IEnumerable<User> Get()
        {
            return _leaderboard;
        }

        // GET api/<controller>/5
        public User Get(string id)
        {
            var user = _leaderboard.FirstOrDefault((u) => u.Name == id);
            return user;
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }
    }
}
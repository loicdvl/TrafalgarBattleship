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
    public class LeaderboardController : ApiController
    {
        private readonly User[] _leaderboard =
        {
            new User{ ConnectionId = "1", Rank=1, Name = "Loic", Avatar="oldship.png", Victory=50, Defeat=10 },
            new User{ ConnectionId = "2", Rank=2, Name="Lucie", Avatar="oldship.png",  Victory=50, Defeat=30 },
            new User{ ConnectionId = "3", Rank=3, Name="Benben", Avatar="oldship.png",  Victory=30, Defeat=70 },
            new User{ ConnectionId = "4", Rank=4, Name="Didi", Avatar="oldship.png",  Victory=10, Defeat=90 }
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
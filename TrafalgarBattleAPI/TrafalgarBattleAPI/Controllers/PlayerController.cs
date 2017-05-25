using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using TrafalgarBattleAPI.Models;
using TrafalgarBattleAPI.Models.Boards;
using TrafalgarBattleAPI.Models.Ships;

namespace TrafalgarBattleAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PlayerController : ApiController
    {
        private readonly Player []_players =
        {
            new Player{Name = "Loic", Avatar="oldship.png"},
            new Player{Name="Lucie", Avatar="oldship.png"}
        };

        private readonly Player _loic = new Player{Name = "Loic", Avatar = "oldship.png"};


        // GET api/<controller>
        public IEnumerable<Player> Get()
        {
            return _players;
        }

        // GET api/<controller>/5
        public Player Get(string id)
        {
            return _loic;
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
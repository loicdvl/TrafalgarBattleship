using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TrafalgarBattleAPI.Models;

namespace TrafalgarBattleAPI.Controllers
{
    public class PlayerController : ApiController
    {
        Player[] players = new Player[]
        {
            new Player("Loïc"),
            new Player("Lucie")
        };

        public IEnumerable<Player> GetAllPlayers()
        {
            return players;
        }

        public IHttpActionResult GetPlayer(string name)
        {
            var player = players.FirstOrDefault((p) => p.Name == name);

            if (player == null)
                return NotFound();
            else
                return Ok(player);
        }
    }
}

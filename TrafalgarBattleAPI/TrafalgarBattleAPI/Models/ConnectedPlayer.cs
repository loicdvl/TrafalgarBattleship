using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TrafalgarBattleAPI.Models
{
    public class ConnectedPlayer : Player
    {
        private string password { get; set; }
        private string email { get; set; }
        private string avatar { get; set; }
        private int nbVictory { get; set; }
        private int nbDefeat { get; set; }

        public ConnectedPlayer()
        {

        }

        public bool deleteAccount()
        {
            return true;
        }
    }
}
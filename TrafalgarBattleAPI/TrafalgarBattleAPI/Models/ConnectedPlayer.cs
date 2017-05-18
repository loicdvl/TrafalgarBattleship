using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TrafalgarBattleAPI.Models
{
    public class ConnectedPlayer : Player
    {
        public string Password { get; set; }
        public string Email { get; set; }
        public int NbVictory { get; set; }
        public int NbDefeat { get; set; }

        public ConnectedPlayer(string name, string password, string email, string avatar, int nbVictory, int nbDefeat) : base(name)
        {
            Password = password;
            Email = email;
            Avatar = avatar;
            NbVictory = nbVictory;
            NbDefeat = nbDefeat;
        }
    }
}
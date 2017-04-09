using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TrafalgarBattleAPI.Models
{
    public class ConnectedPlayer : Player
    {
        private string Password { get; set; }
        private string Email { get; set; }
        private string Avatar { get; set; }
        private int NbVictory { get; set; }
        private int NbDefeat { get; set; }

        public ConnectedPlayer(string name, string password, string email, string avatar, int nbVictory, int nbDefeat) : base(name)
        {
            this.Password = password;
            this.Email = email;
            this.Avatar = avatar;
            this.NbVictory = nbVictory;
            this.NbDefeat = nbDefeat;
        }
    }
}
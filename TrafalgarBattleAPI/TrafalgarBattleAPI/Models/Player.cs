using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TrafalgarBattleAPI.Models
{
    public class Player
    {
        private static int idPlayer { get; set; }
        private string pseudo { get; set; }
        private int shipNb { get; set; }
        private int score { get; set; }
        private bool isDisponible { get; set; }

        public Player()
        {
            pseudo = "Anonyme";
        }
        
        public bool createAccount(string pseudo, string mdp)
        {

            return true;
        }

        public bool login(string pseudo, string mdp)
        {
            return true;
        }

        public void challengePlayer(Player p)
        {

        }

        public void acceptChallenge(Player j)
        {

        }

        public void exitGame()
        {

        }

        public void replay()
        {

        }
    }
}
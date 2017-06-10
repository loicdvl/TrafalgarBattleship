using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TrafalgarBattleAPI.Models.Games
{
    public class Game
    {
        public int IdGame { get; set; }
        public Player Player1 { get; set; }
        public Player Player2 { get; set; }

        public Game(int idGame, Player player1, Player player2)
        {
            IdGame = idGame;
            Player1 = player1;
            Player2 = player2;
        }
    }
}
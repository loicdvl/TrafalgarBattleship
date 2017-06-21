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
        public string FirstToPlay { get; set; }

        public Game(int idGame, Player player1, Player player2)
        {
            IdGame = idGame;
            Player1 = player1;
            Player2 = player2;
            FirstToPlay = Player1.ConnectionId;
            Player1.isTurn = true;
        }

        public Player getPlayer(string connectionId)
        {
            if (Player1.ConnectionId == connectionId)
            {
                return Player1;
            }
            else if (Player2.ConnectionId == connectionId)
            {
                return Player2;
            }
            else
            {
                return null;
            }
        }

        public Player getOpponentPlayer(string connectionId)
        {
            if(Player1.ConnectionId == connectionId)
            {
                return Player2;
            }
            else if(Player2.ConnectionId == connectionId)
            {
                return Player1;
            }
            else
            {
                return null;
            }
        }
    }
}
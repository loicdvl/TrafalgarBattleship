using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using TrafalgarBattleAPI.Models;
using TrafalgarBattleAPI.Models.Boards;
using TrafalgarBattleAPI.Models.Games;

namespace TrafalgarBattleAPI.Hubs
{
    public class HitHub : Hub
    {
        private readonly static GameList _gamelist = new GameList();

        private static int idGame = 0;

        /*public void FireShot(int idGame, int idPlayer, Coordinate coordinate)
        {
            Game game = _gamelist.GetGame(idGame);
            var result = player.ProcessShot(coordinate);
            if (result.Equals(ShotResult.Miss))
            {
                player.ShotGrid.SetCaseState(false,coordinate);
                Clients.Caller.updateOpponentGridOnShotMissed(player.ShotGrid.Cases);
                Clients.Client(player.ConnectionId).updatePlayerGridOnShotMissed(player.ShotGrid.Cases);
            }
            else if (result.Equals(ShotResult.Hit))
            {
                player.ShotGrid.SetCaseState(true, coordinate);
                Clients.Caller.updateOpponentGridOnShotSuccess(player.ShotGrid.Cases);
                Clients.Client(player.ConnectionId).updatePlayerGridOnShotSuccees(player.ShotGrid.Cases);
            }
            else
            {
                player.ShotGrid.SetCaseState(true, coordinate);
                if(!player.HasLost)
                {
                    Clients.Caller.updateOpponentGridOnShotSuccess(player.ShotGrid.Cases);
                    Clients.Client(player.ConnectionId).updatePlayerGridOnShotSuccees(player.ShotGrid.Cases);
                }
                else
                {
                    Clients.Caller.notifyPlayerVictory(player.ShotGrid.Cases);
                    Clients.Client(player.ConnectionId).notifyOpponentVictory(player.ShotGrid.Cases);
                    _games.Remove(game.IdGame, game);
                }
            }
        }

        public void CreateGame(Player player1, Player player2)
        {
            Game game = new Game(idGame++, player1, player2);
            _games.Add(game.IdGame,game);
            Clients.Client(player1.ConnectionId).startGame(game);
            Clients.Client(player2.ConnectionId).startGame(game);
        }*/
    }
}
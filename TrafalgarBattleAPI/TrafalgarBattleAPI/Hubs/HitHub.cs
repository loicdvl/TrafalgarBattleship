using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using TrafalgarBattleAPI.Models;
using TrafalgarBattleAPI.Models.Boards;

namespace TrafalgarBattleAPI.Hubs
{
    public class HitHub : Hub
    {
        public void FireShot(Player player, Coordinate coordinate)
        {
            var result = player.ProcessShot(coordinate);
            if (result.Equals(ShotResult.Miss))
            {
                Clients.Caller.updateOpponentGridShotMiss(player, coordinate);
                Clients.Client(player.ConnectionId).updatePlayerGridShotMiss(coordinate);
            }
            else if (result.Equals(ShotResult.Hit))
            {
                Clients.Caller.updateOpponentGridShotSuccess(coordinate);
                Clients.Client(player.ConnectionId).updatePlayerGridShotSuccees(coordinate);
            }
            else
            {
                Clients.Caller.updateOpponentGridShipSunk(coordinate);
                Clients.Client(player.ConnectionId).updatePlayerGridShipSunk(coordinate);
            }
        }
    }
}
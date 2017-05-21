using System;
using System.Collections.Generic;
using System.Linq;
using TrafalgarBattleAPI.Models.Ships;
using TrafalgarBattleAPI.Models.Boards;

namespace TrafalgarBattleAPI.Models
{
    public class Player
    {
        public string Name { get; set; }
        public string Avatar { get; set; }
        /*public PlayerGrid PlayerGrid { get; set; }
        public List<Ship> Ships { get; set; }
        public bool HasLost
        {
            get
            {
                return Ships.All(x => x.IsSunk);
            }
        }

        public ShotResult ProcessShot(Coordinates coordinates)
        {
            if (!PlayerGrid.Search(coordinates.Row, coordinates.Column).IsOccupied)
            {
                return ShotResult.Miss;
            }
            var ship = Ships.First(x => x.State == PlayerGrid.Search(coordinates.Row, coordinates.Column).State);
            ship.Hits++;
            return ship.IsSunk ? ShotResult.Sunk : ShotResult.Hit;
        }*/
    }
}
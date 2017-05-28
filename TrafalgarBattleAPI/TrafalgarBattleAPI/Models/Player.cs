using System;
using System.Collections.Generic;
using System.Linq;
using TrafalgarBattleAPI.Extensions;
using TrafalgarBattleAPI.Models.Ships;
using TrafalgarBattleAPI.Models.Boards;

namespace TrafalgarBattleAPI.Models
{
    public class Player : User
    {
        public PlayerGrid PlayerGrid { get; set; }
        public List<Ship> Ships { get; set; }
        public bool HasLost
        {
            get
            {
                return Ships.All(x => x.IsSunk);
            }
            set => throw new NotImplementedException();
        }

        public Player(string name)
        {
            Name = name;
            Avatar = "oldship.png";
            Ships = new List<Ship>
            {
                new Destroyer(),
                new Submarine(),
                new Cruiser(),
                new Carrier(),
                new Battleship()
            };
            PlayerGrid = new PlayerGrid();
            HasLost = false;
        }

        public ShotResult ProcessShot(Coordinate coordinate)
        {
            if (!PlayerGrid.Search(coordinate.Row, coordinate.Column).IsOccupied)
            {
                return ShotResult.Miss;
            }
            var ship = Ships.First(x => x.State == PlayerGrid.Search(coordinate.Row, coordinate.Column).State);
            ship.Hits++;
            return ship.IsSunk ? ShotResult.Sunk : ShotResult.Hit;
        }

        public void PlaceShips()
        {
            var rand = new Random(Guid.NewGuid().GetHashCode());
            foreach (var ship in Ships)
            {
                var isOpen = true;
                while (isOpen)
                {
                    var startcolumn = rand.Next(1, 11);
                    var startrow = rand.Next(1, 11);
                    int endrow = startrow, endcolumn = startcolumn;
                    var orientation = rand.Next(1, 101) % 2; //0 for Horizontal

                    var panelNumbers = new List<int>();
                    if (orientation == 0)
                    {
                        for (var i = 1; i < ship.Width; i++)
                        {
                            endrow++;
                        }
                    }
                    else
                    {
                        for (var i = 1; i < ship.Width; i++)
                        {
                            endcolumn++;
                        }
                    }

                    //We cannot place ships beyond the boundaries of the board
                    if (endrow > 10 || endcolumn > 10)
                    {
                        isOpen = true;
                        continue;
                    }

                    //Check if specified panels are occupied
                    var affectedPanels = PlayerGrid.Cases.Range(startrow, startcolumn, endrow, endcolumn);
                    if (affectedPanels.Any(x => x.IsOccupied))
                    {
                        isOpen = true;
                        continue;
                    }

                    foreach (var panel in affectedPanels)
                    {
                        panel.State = ship.State;
                    }
                    isOpen = false;
                }
            }
        }
    }
}
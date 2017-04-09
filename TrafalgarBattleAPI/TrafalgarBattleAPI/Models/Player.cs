using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TrafalgarBattleAPI.Models.Ships;

namespace TrafalgarBattleAPI.Models
{
    public class Player
    {
        public string Name { get; set; }
        public PlayerGrid PlayerGrid { get; set; }
        public List<Ship> Ships { get; set; }
        public bool HasLost
        {
            get
            {
                return Ships.All(x => x.IsSunk);
            }
        }

        public Player(string name)
        {
            this.Name = name;
            Ships = new List<Ship>()
            {
                new Destroyer(),
                new Submarine(),
                new Cruiser(),
                new Carrier(),
                new Battleship()
            };
            PlayerGrid = new PlayerGrid();
        }
    }
}
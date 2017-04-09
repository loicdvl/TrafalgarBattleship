using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TrafalgarBattleAPI.Models.Ships
{
    public class Battleship : Ship
    {
        public Battleship()
        {
            Name = "Battleship";
            Width = 4;
        }
    }
}
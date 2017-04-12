using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TrafalgarBattleAPI.Models.Boards
{
    public enum State
    {
        Battleship,
        Cruiser,
        Destroyer,
        Submarine,
        Carrier,
        Hit,
        Miss,
        Empty
    }
}
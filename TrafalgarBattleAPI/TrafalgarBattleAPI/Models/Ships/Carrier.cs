using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TrafalgarBattleAPI.Models.Ships
{
    public class Carrier : Ship
    {
        public Carrier()
        {
            Name = "Carrier";
            Width = 5;
        }
    }
}
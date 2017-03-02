using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TrafalgarBattleAPI.Models
{
    public class Coordinates
    {
        private int numLine { get; set; }
        private int numRow { get; set; }
        
        public Coordinates(int x, int y)
        {
            numLine = y;
            numRow = x;
        }
    }
}
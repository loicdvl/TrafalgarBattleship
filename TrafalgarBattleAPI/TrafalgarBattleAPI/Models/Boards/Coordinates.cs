using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TrafalgarBattleAPI.Models.Boards
{
    public class Coordinates
    {
        public int Row { get; set; }
        public int Column { get; set; }
        
        public Coordinates(int row, int column)
        {
            this.Row = row;
            this.Column = column;
        }
    }
}
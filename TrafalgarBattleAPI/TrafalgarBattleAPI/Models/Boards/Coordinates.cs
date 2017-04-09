using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TrafalgarBattleAPI.Models
{
    public class Coordinates
    {
        private int Row { get; set; }
        private int Column { get; set; }
        
        public Coordinates(int row, int column)
        {
            this.Row = row;
            this.Column = column;
        }
    }
}
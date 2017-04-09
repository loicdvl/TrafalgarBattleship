using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TrafalgarBattleAPI.Models
{
    public class Case
    {
        public Coordinates Coordinates { get; set; }

        public Case(int row, int column)
        {
            Coordinates = new Coordinates(row, column);
        }

        public bool IsOccupied
        {
            get
            {
                return true;
            }
        }
    }
}
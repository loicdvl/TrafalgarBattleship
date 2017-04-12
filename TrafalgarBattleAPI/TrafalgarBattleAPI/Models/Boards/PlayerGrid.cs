using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TrafalgarBattleAPI.Models.Boards
{
    public class PlayerGrid
    {
        public List<Case> Cases { get; set; }

        public PlayerGrid()
        {
            Cases = new List<Case>();
            for(int i=0;i<10;i++)
            {
                for(int j=0;j<10;j++)
                {
                    Cases.Add(new Case(i,j));
                }
            }
        }

        public Case Search(int row, int column)
        {
            return Cases.Where(x => x.Coordinates.Row == row && x.Coordinates.Column == column).First();
        }
    }
}
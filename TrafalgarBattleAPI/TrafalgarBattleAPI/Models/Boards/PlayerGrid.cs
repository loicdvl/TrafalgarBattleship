using System.Collections.Generic;
using System.Linq;

namespace TrafalgarBattleAPI.Models.Boards
{
    public class PlayerGrid
    {
        public List<Case> Cases { get; set; }

        public PlayerGrid()
        {
            Cases = new List<Case>();
            for(var i=0;i<10;i++)
            {
                for(var j=0;j<10;j++)
                {
                    Cases.Add(new Case(i,j));
                }
            }
        }

        public Case Search(int row, int column)
        {
            return Cases.First(x => x.Coordinates.Row == row && x.Coordinates.Column == column);
        }
    }
}
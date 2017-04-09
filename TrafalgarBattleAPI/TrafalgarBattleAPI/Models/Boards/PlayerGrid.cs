using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TrafalgarBattleAPI.Models
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
    }
}
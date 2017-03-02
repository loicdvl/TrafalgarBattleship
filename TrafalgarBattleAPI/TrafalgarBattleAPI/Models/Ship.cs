using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TrafalgarBattleAPI.Models
{
    public abstract class Ship
    {
        private int nbCases { get; set; }
        private bool isDestroyed { get; set; }
        private List<Case> cases { get; set; }

        public Ship()
        {

        }

        public bool checkShipState()
        {
            return isDestroyed;
        }
    }
}
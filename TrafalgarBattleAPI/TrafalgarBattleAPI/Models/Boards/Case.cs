using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TrafalgarBattleAPI.Models.Boards
{
    public class Case
    {
        public Coordinates Coordinates { get; set; }
        public State State { get; set; }

        public Case(int row, int column)
        {
            Coordinates = new Coordinates(row, column);
            State = State.Empty;
        }

        public bool IsOccupied
        {
            get
            {
                return State == State.Battleship
                    || State == State.Carrier
                    || State == State.Cruiser
                    || State == State.Destroyer
                    || State == State.Submarine;
            }
        }
    }
}
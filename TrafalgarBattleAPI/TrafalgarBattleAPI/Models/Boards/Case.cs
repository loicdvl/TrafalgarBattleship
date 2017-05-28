namespace TrafalgarBattleAPI.Models.Boards
{
    public class Case
    {
        public Coordinate Coordinates { get; set; }
        public State State { get; set; }

        public Case(int row, int column)
        {
            Coordinates = new Coordinate(row, column);
            State = State.Empty;
        }

        public bool IsOccupied => State == State.Battleship
                                  || State == State.Carrier
                                  || State == State.Cruiser
                                  || State == State.Destroyer
                                  || State == State.Submarine;
    }
}
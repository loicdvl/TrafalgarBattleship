namespace TrafalgarBattleAPI.Models.Boards
{
    public class Case
    {
        public Coordinate Coordinate { get; set; }
        public State State { get; set; }

        public Case(int row, int column)
        {
            Coordinate = new Coordinate(row, column);
            State = State.Empty;
        }

        public bool IsOccupied => State == State.Battleship
                                  || State == State.Carrier
                                  || State == State.Cruiser
                                  || State == State.Destroyer
                                  || State == State.Submarine;
    }
}
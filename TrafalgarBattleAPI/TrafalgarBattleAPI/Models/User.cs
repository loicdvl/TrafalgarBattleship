namespace TrafalgarBattleAPI.Models
{
    public class User
    {
        public string ConnectionId { get; set; } 
        public int Rank { get; set; }
        public string Avatar { get; set; }
        public string Name { get; set; }
        public int Victory { get; set; }
        public int Defeat { get; set; }
    }
}
namespace TrafalgarBattleAPI.Models
{
    public class User
    {
        public string ConnectionId { get; set; } 
        public int IdUser { get; set; }
        public int Rank { get; set; }
        public string Avatar { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public int Victory { get; set; }
        public int Defeat { get; set; }


        public User(string connectionId, string name)
        {
            ConnectionId = connectionId;
            IdUser = 1;
            Rank = 1;
            Avatar = "oldship.png";
            Name = name;
            Password = "password";
            Victory = 100;
            Defeat = 0;
        }

        public User(string connectionId, int iduser, string name)
        {
            ConnectionId = connectionId;
            IdUser = iduser;
            Rank = 0;
            Avatar = "oldship.png";
            Name = name;
            Password = "password";
            Victory = 0;
            Defeat = 0;
        }
    }
}
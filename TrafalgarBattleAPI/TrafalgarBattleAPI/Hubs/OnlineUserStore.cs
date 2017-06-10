using Microsoft.AspNet.SignalR;
using TrafalgarBattleAPI.Models;

namespace TrafalgarBattleAPI.Hubs
{
    public class OnlineUserStore : Hub
    {
        private readonly static ConnectionMapping<string> _connections =
            new ConnectionMapping<string>();

        public void Connect(User user)
        {
            _connections.Add(user.ConnectionId, user);
            var userlist = _connections.GetAllUsers();
            Clients.All.updateOnlineUserList(userlist);
        }

        public void Disconnect(User user)
        {
            _connections.Remove(user.ConnectionId, user);
            var userlist = _connections.GetAllUsers();
            Clients.All.updateOnlineUserList(userlist);
        }

        public void CreateUserFromName(string name)
        {
            User user = new User(Context.ConnectionId,name);
            _connections.Add(user.ConnectionId, user);
            var userlist = _connections.GetAllUsers();
            Clients.Caller.setUser(user);
            Clients.All.updateOnlineUserList(userlist);
        }

        public void ChallengeUser(User challenger, User defiedUser)
        {
            if( _connections.GetConnections(defiedUser.ConnectionId) != null )
            {
                Clients.Client(defiedUser.ConnectionId).challengePlayer(challenger);
                Clients.Caller.waitingForResponse(defiedUser);
            }
            else
            {
                Clients.Caller.userDefiedDisconnected(defiedUser);
            }
            
        }

        public void ChallengeAccepted(User challenger, User opponent)
        {
            Clients.Caller.startGame(challenger);
            Clients.Client(challenger.ConnectionId).startGame(opponent);
        }

        public void ChallengeDeclined(User challenger, User coward)
        {
            Clients.Client(challenger.ConnectionId).displayDeniedChallenge(coward);
        }

        public void ChallengeUserAbort(User challenger, User opponent)
        {
            Clients.Client(challenger.ConnectionId).abortChallenge(challenger, opponent);
        }
    }
}
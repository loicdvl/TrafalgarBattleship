using Microsoft.AspNet.SignalR;
using TrafalgarBattleAPI.Models;

namespace TrafalgarBattleAPI.Hubs
{
    public class OnlineUserStore : Hub
    {
        private readonly static ConnectionMapping<string> _connections =
            new ConnectionMapping<string>();

        private static int _iduser = 0;

        public void UpdateOnlineUserList()
        {
            var userlist = _connections.GetAllUsers();
            Clients.All.updateOnlineUserList(userlist);
        }

        public void Disconnect(string connectionId)
        {
            _connections.Remove(connectionId);
            var userlist = _connections.GetAllUsers();
            Clients.All.updateOnlineUserList(userlist);
        }

        public void CreateUserFromName(string name)
        {
            User _user = new User(Context.ConnectionId, _iduser++, name);
            _connections.Add(_user.ConnectionId, _user);
            Clients.Caller.setUser(_user);
            var userlist = _connections.GetAllUsers();
            Clients.All.updateOnlineUserList(userlist);
        }

        public void ChallengeUser(string targetConnectionId, string defiedUserName, string name)
        {
            if( _connections.GetConnections(targetConnectionId) != null )
            {
                Clients.Client(targetConnectionId).defied(name);
                Clients.Caller.waitingForResponse(defiedUserName);
            }
            else
            {
                Clients.Caller.userDefiedDisconnected(defiedUserName);
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
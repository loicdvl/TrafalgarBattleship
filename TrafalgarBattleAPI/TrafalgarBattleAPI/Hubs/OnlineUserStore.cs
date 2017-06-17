using Microsoft.AspNet.SignalR;
using TrafalgarBattleAPI.Models;
using TrafalgarBattleAPI.Models.Boards;
using TrafalgarBattleAPI.Models.Games;

namespace TrafalgarBattleAPI.Hubs
{
    public class OnlineUserStore : Hub
    {
        private readonly static ConnectionMapping<string> _connections =
            new ConnectionMapping<string>();

        private readonly static GameList _gamelist = new GameList();

        private static int _iduser = 0;
        private static int _idGame = 0;

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

        public void ChallengeUser(string targetConnectionId, string defiedUserName, string challengerConnectionId, string challengerName)
        {
            User targetUser = _connections.GetConnections(targetConnectionId);
            User challengerUser = _connections.GetConnections(challengerConnectionId);

            if ( targetUser != null && challengerUser != null )
            {
                Clients.Client(targetUser.ConnectionId).defied(challengerUser);
                Clients.Caller.waitingForResponse(targetUser);
            }
            else
            {
                Clients.Caller.userDefiedDisconnected(defiedUserName);
            }   
        }

        public void ChallengeAccepted(string callerConnectionId, string opponentConnectionId)
        {
            User user1 = _connections.GetConnections(callerConnectionId);
            User user2 = _connections.GetConnections(opponentConnectionId);

            Player player1 = new Player(user1);
            player1.PlaceShips();
            Player player2 = new Player(user2);
            player2.PlaceShips();

            Game game = new Game(_idGame++, player1, player2);
            _gamelist.Add(game);

            Clients.Caller.startGame(game.IdGame, game.Player1, game.Player2);
            Clients.Client(opponentConnectionId).startGame(game.IdGame, game.Player2, game.Player1);
        }

        public void ChallengeDeclined(string callerConnectionId, string challengerConnectionId)
        {
            User user = _connections.GetConnections(callerConnectionId);

            Clients.Client(challengerConnectionId).displayDeniedChallenge(user);
        }

        public void ChallengeUserAbort(User challenger, User opponent)
        {
            Clients.Client(challenger.ConnectionId).abortChallenge(challenger, opponent);
        }

        public void FireShot(int idGame, string shooterPlayerConnectionId, string targerPlayerConnectionId, Coordinate coordinate)
        {
            Game game = _gamelist.GetGame(idGame);
            Player targetPlayer = game.getPlayer(targerPlayerConnectionId);
            Player shooterPlayer = game.getPlayer(shooterPlayerConnectionId);

            if ( game == null || targetPlayer == null || shooterPlayer == null )
            {
                Clients.Caller.errorGame();
                Clients.Client(targerPlayerConnectionId).errorGame();
            }

            var result = targetPlayer.ProcessShot(coordinate);
            if (result.Equals(ShotResult.Miss))
            {
                shooterPlayer.ProcessShotResult(coordinate,ShotResult.Miss);
                Clients.Caller.updateOpponentGridOnShotMissed(shooterPlayer.ShotGrid.Cases);
            }
            else if (result.Equals(ShotResult.Hit))
            {
                shooterPlayer.ProcessShotResult(coordinate, ShotResult.Hit);
                Clients.Caller.updateOpponentGridOnShotSuccess(shooterPlayer.ShotGrid.Cases);
            }
            else
            {
                shooterPlayer.ProcessShotResult(coordinate, ShotResult.Sunk);
                if (!shooterPlayer.HasLost)
                {
                    Clients.Caller.updateOpponentGridOnShotSuccess(shooterPlayer.ShotGrid.Cases);
                }
                else
                {
                    Clients.Caller.notifyPlayerVictory(shooterPlayer.ShotGrid.Cases);
                    _gamelist.Remove(game);
                }
            }
        }
    }
}
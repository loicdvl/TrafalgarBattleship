using Microsoft.AspNet.SignalR;
using System.Collections.Generic;
using System.Threading.Tasks;
using TrafalgarBattleAPI.Models;
using TrafalgarBattleAPI.Models.Boards;
using TrafalgarBattleAPI.Models.Games;

namespace TrafalgarBattleAPI.Hubs
{
    public class OnlineUserStore : Hub
    {
        private readonly static OnlineUserMapping<string> _onlineUserMap =
            new OnlineUserMapping<string>();

        private readonly static GameList _gamelist = new GameList();

        private static int _iduser = 0;
        private static int _idGame = 0;

        
        public override Task OnDisconnected(bool stopCalled)
        {
            _onlineUserMap.Remove(Context.ConnectionId);
            List<User> userlist = _onlineUserMap.GetAllUsers();
            Clients.All.updateOnlineUserList(userlist);

            List<Game> games = _gamelist.GetAllGames();
            foreach(Game g in games)
            {
                if(g.GetPlayer(Context.ConnectionId) != null)
                {
                    Player player = g.GetOpponentPlayer(Context.ConnectionId);
                    Clients.Client(player.ConnectionId).notifyOpponentDisconnected();
                    _gamelist.Remove(g);
                    break;
                }
            }
            return base.OnDisconnected(stopCalled);
        }

        public void Connect(int iduser, string name, string avatar, int victory, int defeat)
        {
            User user = new User(Context.ConnectionId, iduser, name, avatar, victory, defeat);
            if(user != null)
            {
                _onlineUserMap.Add(user.ConnectionId, user);
                Clients.Caller.setUser(user);
                List<User> userlist = _onlineUserMap.GetAllUsers();
                Clients.All.updateOnlineUserList(userlist);
            }
        }

        public void Disconnect()
        {
            _onlineUserMap.Remove(Context.ConnectionId);
            List<User> userlist = _onlineUserMap.GetAllUsers();
            Clients.All.updateOnlineUserList(userlist);
        }

        public void CreateUserFromName(string name)
        {
            User _user = new User(Context.ConnectionId, _iduser++, name);
            _onlineUserMap.Add(_user.ConnectionId, _user);
            Clients.Caller.setUser(_user);
            List<User> userlist = _onlineUserMap.GetAllUsers();
            Clients.All.updateOnlineUserList(userlist);
        }

        public void ChallengeUser(string targetConnectionId, string defiedUserName, string challengerConnectionId, string challengerName)
        {
            User targetUser = _onlineUserMap.GetOnlineUser(targetConnectionId);
            User challengerUser = _onlineUserMap.GetOnlineUser(challengerConnectionId);

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

        public void ChallengeAccepted(string opponentConnectionId)
        {
            User user1 = _onlineUserMap.GetOnlineUser(Context.ConnectionId);
            User user2 = _onlineUserMap.GetOnlineUser(opponentConnectionId);

            Player player1 = new Player(user1);
            player1.PlaceRandomShips();
            Player player2 = new Player(user2);
            player2.PlaceRandomShips();

            Game game = new Game(_idGame++, player1, player2);
            _gamelist.Add(game);

            Clients.Caller.startGame(game.IdGame, game.Player1, game.Player2);
            Clients.Client(opponentConnectionId).startGame(game.IdGame, game.Player2, game.Player1);
        }

        public void ChallengeDeclined(string challengerConnectionId)
        {
            User user = _onlineUserMap.GetOnlineUser(Context.ConnectionId);

            Clients.Client(challengerConnectionId).displayDeniedChallenge(user);
        }

        public void ChallengeUserAbort(string targetConnectionId)
        {
            User caller = _onlineUserMap.GetOnlineUser(Context.ConnectionId);
            if ( caller != null )
            {
                Clients.Client(targetConnectionId).abortChallenge();
            }
        }

        public void IsFirstToPlay(int idGame, string connectionId)
        {
            Game game = _gamelist.GetGame(idGame);
            if (game != null)
            {
                 Clients.Caller.firstToPlay(game.Player1.ConnectionId == connectionId);
            }
            else
            {
                Clients.Caller.gameDoesNotExists();
            }
        }

        public void FireShot(int idGame, string shooterPlayerConnectionId, int row, int column)
        {
            Game game = _gamelist.GetGame(idGame);
            Player targetPlayer = game.GetOpponentPlayer(shooterPlayerConnectionId);
            Player shooterPlayer = game.GetPlayer(shooterPlayerConnectionId);
            Coordinate coordinate = new Coordinate(row, column);

            if ( game == null || targetPlayer == null || shooterPlayer == null )
            {
                Clients.Caller.errorGame();
                Clients.Client(targetPlayer.ConnectionId).errorGame();
            }

            ShotResult result = targetPlayer.ProcessShot(coordinate);
            if (result.Equals(ShotResult.Miss))
            {
                shooterPlayer.ProcessShotResult(coordinate,ShotResult.Miss);
                Clients.Caller.updateShotGridOnMissedShot(shooterPlayer.ShotGrid);
                Clients.Client(targetPlayer.ConnectionId).setTurn();
            }
            else if (result.Equals(ShotResult.Hit))
            {
                shooterPlayer.ProcessShotResult(coordinate, ShotResult.Hit);
                Clients.Caller.updateShotGridOnSuccessfullShot(shooterPlayer.ShotGrid);
                Clients.Client(targetPlayer.ConnectionId).notifyHit();
            }
            else
            {
                shooterPlayer.ProcessShotResult(coordinate, ShotResult.Sunk);
                if (!targetPlayer.HasLost)
                {
                    Clients.Caller.updateShotGridOnSunkShip(shooterPlayer.ShotGrid);
                    Clients.Client(targetPlayer.ConnectionId).notifyShipHasBeenSink();
                }
                else
                {
                    shooterPlayer.UpdateScoreOnVictory();
                    targetPlayer.UpdateScoreOnDefeat();
                    Clients.Caller.notifyPlayerVictory(shooterPlayer.ShotGrid);
                    Clients.Client(targetPlayer.ConnectionId).notifyPlayerDefeat();
                    _gamelist.Remove(game);
                }
            }
        }
    }
}
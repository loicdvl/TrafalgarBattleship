using System.Collections.Generic;
using TrafalgarBattleAPI.Models;

namespace TrafalgarBattleAPI
{
    public class OnlineUserMapping<T>
    {
        private readonly Dictionary<T, User> _onlineUsers =
            new Dictionary<T, User>();

        public void Add(T key, User user)
        {
            lock (_onlineUsers)
            {
                if (!_onlineUsers.TryGetValue(key, out User u))
                {
                    _onlineUsers.Add(key, user);
                }
            }
        }

        public User GetOnlineUser(T key)
        {
            if (_onlineUsers.TryGetValue(key, out User user))
            {
                return user;
            }
            return null;
        }

        public void Remove(T key)
        {
            lock (_onlineUsers)
            {
                if (_onlineUsers.TryGetValue(key, out User u))
                {
                    _onlineUsers.Remove(key);
                }
            }
        }

        public List<User> GetAllUsers()
        {
            List<User> users = new List<User>();
            foreach(var onlineUser in _onlineUsers)
            {
                users.Add(onlineUser.Value);
            }
            return users;
        }
    }
}
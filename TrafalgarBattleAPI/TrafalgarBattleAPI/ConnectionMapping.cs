using System.Collections.Generic;
using TrafalgarBattleAPI.Models;

namespace TrafalgarBattleAPI
{
    public class ConnectionMapping<T>
    {
        private readonly Dictionary<T, User> _connections =
            new Dictionary<T, User>();

        public void Add(T key, User user)
        {
            lock (_connections)
            {
                if (!_connections.TryGetValue(key, out User u))
                {
                    _connections.Add(key, user);
                }
            }
        }

        public User GetConnections(T key)
        {
            if (_connections.TryGetValue(key, out User user))
            {
                return user;
            }
            return null;
        }

        public void Remove(T key)
        {
            lock (_connections)
            {
                if (_connections.TryGetValue(key, out User u))
                {
                    _connections.Remove(key);
                }
            }
        }

        public List<User> GetAllUsers()
        {
            List<User> users = new List<User>();
            foreach(var connection in _connections)
            {
                users.Add(connection.Value);
            }
            return users;
        }
    }
}
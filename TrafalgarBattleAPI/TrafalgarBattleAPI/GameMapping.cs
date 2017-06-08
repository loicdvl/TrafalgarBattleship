using System.Collections.Generic;
using TrafalgarBattleAPI.Models.Games;

namespace TrafalgarBattleAPI.Hubs
{
    public class GameMapping<T>
    {
        private readonly Dictionary<T, Game> _games =
            new Dictionary<T, Game>();

        public void Add(T key, Game game)
        {
            lock (_games)
            {
                if (!_games.TryGetValue(key, out Game g))
                {
                    _games.Add(key, game);
                }
            }
        }

        public Game GetGame(T key)
        {
            if (_games.TryGetValue(key, out Game game))
            {
                return game;
            }
            return null;
        }

        public void Remove(T key, Game game)
        {
            lock (_games)
            {
                if (_games.TryGetValue(key, out Game g))
                {
                    _games.Remove(key);
                }
            }
        }

        public List<Game> GetAllGames()
        {
            List<Game> games = new List<Game>();
            foreach (var game in _games)
            {
                games.Add(game.Value);
            }
            return games;
        }
    }
}
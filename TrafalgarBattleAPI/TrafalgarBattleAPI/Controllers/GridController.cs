using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using TrafalgarBattleAPI.Extensions;
using TrafalgarBattleAPI.Models.Boards;
using TrafalgarBattleAPI.Models.Ships;

namespace TrafalgarBattleAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class GridController : ApiController
    {
        public List<Ship> Ships = new List <Ship>
        {
            new Destroyer(),
            new Submarine(),
            new Cruiser(),
            new Carrier(),
            new Battleship()
        };

        public PlayerGrid PlayerGrid = new PlayerGrid();



    // GET api/<controller>
        public IEnumerable<PlayerGrid> Get()
        {
            PlaceShips();
            yield return PlayerGrid;
        }

        // GET api/<controller>/5
        public PlayerGrid Get(int id)
        {
            return PlayerGrid;
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }

        public void PlaceShips()
        {
            var rand = new Random(Guid.NewGuid().GetHashCode());
            foreach (var ship in Ships)
            {
                var isOpen = true;
                while (isOpen)
                {
                    var startcolumn = rand.Next(1, 11);
                    var startrow = rand.Next(1, 11);
                    int endrow = startrow, endcolumn = startcolumn;
                    var orientation = rand.Next(1, 101) % 2; //0 for Horizontal

                    var panelNumbers = new List<int>();
                    if (orientation == 0)
                    {
                        for (var i = 1; i < ship.Width; i++)
                        {
                            endrow++;
                        }
                    }
                    else
                    {
                        for (var i = 1; i < ship.Width; i++)
                        {
                            endcolumn++;
                        }
                    }

                    //We cannot place ships beyond the boundaries of the board
                    if (endrow > 10 || endcolumn > 10)
                    {
                        isOpen = true;
                        continue;
                    }

                    //Check if specified panels are occupied
                    var affectedPanels = PlayerGrid.Cases.Range(startrow, startcolumn, endrow, endcolumn);
                    if (affectedPanels.Any(x => x.IsOccupied))
                    {
                        isOpen = true;
                        continue;
                    }

                    foreach (var panel in affectedPanels)
                    {
                        panel.State = ship.State;
                    }
                    isOpen = false;
                }
            }
        }
    }
}
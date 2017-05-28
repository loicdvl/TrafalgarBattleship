using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TrafalgarBattleAPI.Models.Boards;

namespace TrafalgarBattleAPI.Extensions
{
    public static class CaseExtensions
    {
        public static Case At(this List<Case> cases, int row, int column)
        {
            return cases.First(x => x.Coordinates.Row == row && x.Coordinates.Column == column);
        }

        public static List<Case> Range(this List<Case> cases, int startRow, int startColumn, int endRow, int endColumn)
        {
            return cases.Where(x => x.Coordinates.Row >= startRow
                                     && x.Coordinates.Column >= startColumn
                                     && x.Coordinates.Row <= endRow
                                     && x.Coordinates.Column <= endColumn).ToList();
        }
    }
}
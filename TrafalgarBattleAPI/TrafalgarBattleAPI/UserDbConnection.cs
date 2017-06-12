using Npgsql;
using NpgsqlTypes;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using TrafalgarBattleAPI.Models;

namespace TrafalgarBattleAPI
{
    public class UserDbConnection
    {
        string Conx = "Server=localhost;Port=5432;Database=TrafalgarBattleship;User Id=postgres;Password=admin;";
        NpgsqlCommand MyCmd = null;
        NpgsqlConnection MyCnx = null;

        public void InsertUser(string name, string password)
        {
            MyCnx = new NpgsqlConnection(Conx);
            string insert = "INSERT INTO \"user\"(iduser,name,password,avatar,victory,defeat) values(DEFAULT,:name,:password,:avatar,:victory,:defeat)";

            MyCnx.Open();
            MyCmd = new NpgsqlCommand(insert, MyCnx);
            
            MyCmd.Parameters.Add(new NpgsqlParameter("name", NpgsqlDbType.Varchar)).Value = name;
            MyCmd.Parameters.Add(new NpgsqlParameter("password", NpgsqlDbType.Varchar)).Value = password;
            MyCmd.Parameters.Add(new NpgsqlParameter("avatar", NpgsqlDbType.Varchar)).Value = "oldship.png";
            MyCmd.Parameters.Add(new NpgsqlParameter("victory", NpgsqlDbType.Integer)).Value = 0;
            MyCmd.Parameters.Add(new NpgsqlParameter("defeat", NpgsqlDbType.Integer)).Value = 0;

            MyCmd.ExecuteNonQuery();
            MyCnx.Close();
        }

        public void GetUser(string name, string password)
        {
            DataTable MyData = new DataTable();
            NpgsqlDataAdapter da;
            MyCnx = new NpgsqlConnection(Conx);
            string select = "SELECT iduser,name,avatar,victory,defeat from \"user\" WHERE (name=:name AND password=:password);";

            MyCnx.Open();
            MyCmd = new NpgsqlCommand(select, MyCnx);

            da = new NpgsqlDataAdapter(MyCmd);
            da.Fill(MyData);

            foreach (DataRow row in MyData.Rows)
            {
                for (int i = 0; i < MyData.Columns.Count; i++)
                {
                    Console.Write("{0} \t \n", row[i].ToString());
                }
            }

            MyCnx.Close();
        }

        public void UpdateUser(int iduser, string name, string password, string avatar, int victory, int defeat)
        {
            MyCnx = new NpgsqlConnection(Conx);
            string update = "UPDATE  \"user\"  SET name =:name ,password=:password,avatar=:avatar,victory=:victory WHERE(iduser=:iduser);";
            MyCnx.Open();

            MyCmd = new NpgsqlCommand(update, MyCnx);

            MyCmd.Parameters.Add(new NpgsqlParameter("iduser", NpgsqlDbType.Integer)).Value = iduser;
            MyCmd.Parameters.Add(new NpgsqlParameter("name", NpgsqlDbType.Varchar)).Value = name;
            MyCmd.Parameters.Add(new NpgsqlParameter("password", NpgsqlDbType.Varchar)).Value = password;
            MyCmd.Parameters.Add(new NpgsqlParameter("avatar", NpgsqlDbType.Varchar)).Value = avatar;
            MyCmd.Parameters.Add(new NpgsqlParameter("victory", NpgsqlDbType.Integer)).Value = victory;
            MyCmd.Parameters.Add(new NpgsqlParameter("defeat", NpgsqlDbType.Integer)).Value = defeat;

            MyCmd.ExecuteNonQuery();
            MyCnx.Close();
        }

        public DataTable SelectAllUser()
        {
            DataTable MyData = new DataTable();
            NpgsqlDataAdapter da;
            MyCnx = new NpgsqlConnection(Conx);
            MyCnx.Open();
            string select = "SELECT * FROM \"user\"";
            MyCmd = new NpgsqlCommand(select, MyCnx);
            da = new NpgsqlDataAdapter(MyCmd);
            da.Fill(MyData);
            MyCnx.Close();
            return MyData;
        }

        public void DeleteUserbyId(int iduser)
        {
            MyCnx = new NpgsqlConnection(Conx);
            string delete = "DELETE FROM \"user\" WHERE(iduser=:iduser)";

            MyCnx.Open();
            MyCmd = new NpgsqlCommand(delete, MyCnx);
            MyCmd.Parameters.Add(new NpgsqlParameter("iduser", NpgsqlDbType.Integer)).Value = iduser;
            MyCmd.ExecuteNonQuery();
            MyCnx.Close();
        }
    }
}
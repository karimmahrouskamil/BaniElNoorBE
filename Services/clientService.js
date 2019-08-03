var Promise = require("promise");
var CLientModel = require("./../Models/ClientModel");
var clientTable = "Clients";
var Connection = require("../config/database-config");
var ClientsTable = "Clients";
var PriestTable = "Priests";
var ServantsTable = "Servants";
var CategoriesTable = "Categories";
var ZoneTable = "Zone";
var ClassTable = "Class";
var SchoolTable = "School";
var ClientSchema = "ClientsFatherOfConfession";
module.exports.getAllClients = function() {
  return new Promise(function(resolve, reject) {
    Connection.query(
      "SELECT * FROM ?? as CL inner join ?? as PR  on CL." +
        CLientModel.CLIENT_TABLE.ClientsFatherOfConfession +
        " = PR.ID inner join ?? as SE on CL." +
        CLientModel.CLIENT_TABLE.ClientServantFollowing +
        " = SE.ID inner join ?? as Ca  on CL." +
        CLientModel.CLIENT_TABLE.clientCategoryID +
        " = Ca.ID inner join ?? as Zo on CL." +
        CLientModel.CLIENT_TABLE.ClientZone +
        " = Zo.ID inner join ?? as CLA on CL." +
        CLientModel.CLIENT_TABLE.ClientClass +
        " = CLA.ID inner join ?? as SCH on CL." +
        CLientModel.CLIENT_TABLE.ClientSchoolID +
        " = SCH.ID",
      [
        CLientModel.CLIENT_TABLE.TableName,
        PriestTable,
        ServantsTable,
        CategoriesTable,
        ZoneTable,
        ClassTable,
        SchoolTable
      ],
      function(error, results, fields) {
        if (error) {
          reject(error);
        } else {
        //   console.log("result   ====> " + JSON.stringify(results));
          resolve(results);
        }
      }
    );
  });
};

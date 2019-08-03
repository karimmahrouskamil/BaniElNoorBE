var Promise = require("promise");
var CLientModel = require("./../Models/ClientModel");
var ServantModel = require("./../Models/ServantModel");
var PriestModel = require("./../Models/PriestModel");
var CategorytModel = require("./../Models/CategoriesModel");
var ZoneModel = require("./../Models/ZoneModel");
var ClassModel = require("./../Models/ClassModel");
var SchoolModel = require("./../Models/SchoolModel");
var Connection = require("../config/database-config");

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
        PriestModel.PRIEST_TABLE.TableName,
        ServantModel.SERVANT_TABLE.TableName,
        CategorytModel.CATEGRORIES_TABLE.TableName,
        ZoneModel.ZONE_TABLE.TableName,
        ClassModel.CLASS_TABLE.TableName,
        SchoolModel.SCHOOL_TABLE.TableName
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

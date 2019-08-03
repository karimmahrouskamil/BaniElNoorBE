var Promise = require("promise");

// schemaas 
var CLientSchema = require("../Schema/ClientSchema");
var ServantSchema = require("../Schema/ServantSchema");
var PriestSchema = require("../Schema/PriestSchema");
var CategorytSchema = require("../Schema/CategoriesSchema");
var ZoneSchema = require("../Schema/ZoneSchema");
var ClassSchema = require("../Schema/ClassSchema");
var SchoolSchema = require("../Schema/SchoolSchema");

// connection to db 
var Connection = require("../config/database-config");

module.exports.getAllClients = function() {
  return new Promise(function(resolve, reject) {
    Connection.query(
      "SELECT * FROM ?? as CL inner join ?? as PR  on CL." +
        CLientSchema.CLIENT_TABLE.ClientsFatherOfConfession +
        " = PR.ID inner join ?? as SE on CL." +
        CLientSchema.CLIENT_TABLE.ClientServantFollowing +
        " = SE.ID inner join ?? as Ca  on CL." +
        CLientSchema.CLIENT_TABLE.clientCategoryID +
        " = Ca.ID inner join ?? as Zo on CL." +
        CLientSchema.CLIENT_TABLE.ClientZone +
        " = Zo.ID inner join ?? as CLA on CL." +
        CLientSchema.CLIENT_TABLE.ClientClass +
        " = CLA.ID inner join ?? as SCH on CL." +
        CLientSchema.CLIENT_TABLE.ClientSchoolID +
        " = SCH.ID",
      [
        CLientSchema.CLIENT_TABLE.TableName,
        PriestSchema.PRIEST_TABLE.TableName,
        ServantSchema.SERVANT_TABLE.TableName,
        CategorytSchema.CATEGRORIES_TABLE.TableName,
        ZoneSchema.ZONE_TABLE.TableName,
        ClassSchema.CLASS_TABLE.TableName,
        SchoolSchema.SCHOOL_TABLE.TableName
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

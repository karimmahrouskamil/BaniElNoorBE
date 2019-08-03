var Promise = require("promise");

// schemaas
var AllSchemas = require("../Schema/AllSchemas");
// connection to db
var Connection = require("../config/database-config");

module.exports.getAllClients = function() {
  return new Promise(function(resolve, reject) {
    Connection.query(
      "SELECT * FROM ?? as CL inner join ?? as PR  on CL." +
        AllSchemas.All_SCHEMAS.ClientSchema.CLIENT_TABLE
          .ClientsFatherOfConfession +
        " = PR.ID inner join ?? as SE on CL." +
        AllSchemas.All_SCHEMAS.ClientSchema.CLIENT_TABLE
          .ClientServantFollowing +
        " = SE.ID inner join ?? as Ca  on CL." +
        AllSchemas.All_SCHEMAS.ClientSchema.CLIENT_TABLE.clientCategoryID +
        " = Ca.ID inner join ?? as Zo on CL." +
        AllSchemas.All_SCHEMAS.ClientSchema.CLIENT_TABLE.ClientZone +
        " = Zo.ID inner join ?? as CLA on CL." +
        AllSchemas.All_SCHEMAS.ClientSchema.CLIENT_TABLE.ClientClass +
        " = CLA.ID inner join ?? as SCH on CL." +
        AllSchemas.All_SCHEMAS.ClientSchema.CLIENT_TABLE.ClientSchoolID +
        " = SCH.ID",
      [
        AllSchemas.All_SCHEMAS.ClientSchema.CLIENT_TABLE.TableName,
        AllSchemas.All_SCHEMAS.PriestSchema.PRIEST_TABLE.TableName,
        AllSchemas.All_SCHEMAS.ServantSchema.SERVANT_TABLE.TableName,
        AllSchemas.All_SCHEMAS.CategorytSchema.CATEGRORIES_TABLE.TableName,
        AllSchemas.All_SCHEMAS.ZoneSchema.ZONE_TABLE.TableName,
        AllSchemas.All_SCHEMAS.ClassSchema.CLASS_TABLE.TableName,
        AllSchemas.All_SCHEMAS.SchoolSchema.SCHOOL_TABLE.TableName
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

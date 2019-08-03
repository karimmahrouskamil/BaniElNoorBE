var Promise = require("promise");
var clientTable = "Clients";
var Connection = require("../config/database-config");
var ClientsTable = "Clients";
module.exports.getAllClients = function() {
  return new Promise(function(resolve, reject) {
    Connection.query("SELECT * FROM ?? ", [ClientsTable], function(
      error,
      results,
      fields
    ) {
      if (error) {
        reject(error);
      } else {
        console.log("result   ====> " + JSON.stringify(results));
        resolve(results);
      }
    });
  });
};

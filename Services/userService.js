var Promise = require("promise");
module.exports.getAllQuestions = function () {
    return new Promise(function (resolve, reject) {
      connectionTODB.query("SELECT * FROM ?? ", [questionsTableName], function (
        error,
        results,
        fields
      ) {
        if (error) {
          resolve(resManager.getResponse(resCodes.RESPONSE_CODE_GENERAL_ERROR_GENRAL_FAILURE, error));
        } else {
          console.log("result   ====> " + JSON.stringify(results));
          resolve(resManager.getResponse(resCodes.RESPONSE_CODE_RETRIEVE_ALL_QUESTIONS, results));
        }
      });
    });
  };
var express = require("express");
var router = express.Router();
var CLientService = require("./../Services/clientService");
var Connection = require("../config/database-config");
/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("Clients are here");
});
router.get("/getClients", function(req, res, next) {
  Connection.query("SELECT * FROM Priests", function(error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
    res.send(results);
  });
});
router.post("/postTest", async function(req, res, next) {
  let AllClientsData = req.body;
  console.log(req.body);

  const values = AllClientsData.map(eachData => [
    eachData.Name,
    eachData.info,
    eachData.GraduationYearID,
    eachData.Email,
    eachData.LocationX,
    eachData.LocationY,
    eachData.fatherOfConfession,
    eachData.servantFollowing,
    eachData.clientCategoryID,
    eachData.chomosya,
    eachData.MobilePhone,
    eachData.HomePhone,
    eachData.fatherPhone,
    eachData.motherPhone,
    eachData.Class,
    eachData.Zone,
    eachData.streetName,
    eachData.floorNumber,
    eachData.buildingNumber,
    eachData.flatNumber,
    eachData.streetDetails,
    eachData.SchoolID
  ]);
  console.log(values);

  await Connection.query(
    "INSERT INTO `Clients` (`Name`, `info`, `GraduationYearID`, `Email`, `LocationX`, `LocationY`, `fatherOfConfession`, `servantFollowing`, `clientCategoryID`, `chomosya`, `MobilePhone`, `HomePhone`, `fatherPhone`, `motherPhone`, `Class`, `Zone`, `streetName` , `floorNumber` , `buildingNumber` , `flatNumber` , `streetDetails` , `SchoolID`) VALUES ?",
    [values],
    function(error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
      res.send(results);
    }
  );
});

router.get("/postClients", function(req, res, next) {
  Connection.query("SELECT * FROM School", function(error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
    res.send(results);
  });
});
router.get("/Clients", (req, res) => {
  CLientService.getAllClients()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
});
module.exports = router;

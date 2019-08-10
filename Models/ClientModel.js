var FatherOfConfession = require("./PriestModel").Priest;
var ClassModel = require("./ClassModel").ClassModel;

module.exports.CLient = function(data) {
  this.clientID = data.ID;
  this.clientName = data.ClientName;
  this.ClientInfo = data.ClientInfo;
  this.ClientGraduationYearID = data.ClientGraduationYearID;
  this.ClientEmail = data.ClientEmail;
  this.ClientLocationX = data.ClientLocationX;
  this.ClientLocationY = data.ClientLocationY;
  this.ClientsFatherOfConfession = new FatherOfConfession(data);
  this.ClientServantFollowing = data.ClientServantFollowing;
  this.clientCategoryID = data.clientCategoryID;
  this.ClientChomosya = data.ClientChomosya;
  this.ClientMobilePhone = data.ClientMobilePhone;
  this.ClientHomePhone = data.ClientHomePhone;
  this.ClientbirthDate = data.ClientbirthDate;
  this.ClientFatherPhone = data.ClientFatherPhone;
  this.ClientMotherPhone = data.ClientMotherPhone;
  this.ClientClass = data.ClientClass;
  this.ClientZone = data.ClientZone;
  this.ClientstreetName = data.ClientstreetName;
  
};

const { dbApi } = require("./dbApi");
const { dbPosgres } = require("./dbPosgres");

module.exports = {
  dbCombined: async () => {
    const dbFromApi = await dbApi();

    const dbFromPosgres = await dbPosgres();
    
    return dbFromApi.concat(dbFromPosgres);
  },
};

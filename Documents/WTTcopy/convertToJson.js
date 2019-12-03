

var xlsx = require ("xlsx");

var workBook = xlsx.readFile("patients.xlsx");

var workSheet = workBook.Sheets['Sheet2'];

// Convert data to json format
var data = xlsx.utils.sheet_to_json(workSheet);

var row = xlsx.parseInt











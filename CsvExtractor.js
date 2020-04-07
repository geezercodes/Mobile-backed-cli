const fs = require("fs");
const mongodb = require("mongodb").MongoClient;
const fastcsv = require("fast-csv");

//connect to a mongodb database instance for storage of the Converted json object
let url = "mongodb://localhost:27017/";
let stream = fs.createReadStream("Cheap.Stocks.Internationalization.Currencies.csv");
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on("data", function(data) {
    csvData.push({
      country: data[0],
      currency: data[1],
      code: data[2],
    });
  })
  .on("end", function() {
    // remove the first line: header
    csvData.shift();

    console.log(csvData);
//Connect to the mongodb instance and save the data for easy parsing in the API
    mongodb.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err, client) => {
        if (err) throw err;

        client
          .db("mobile_db")
          .collection("currencies")
          .insertMany(csvData, (err, res) => {
            if (err) throw err;

            console.log(`Inserted: ${res.insertedCount} rows`);
            client.close();
          });
      }
    );
  });

stream.pipe(csvStream);
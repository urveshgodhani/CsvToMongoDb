let fs = require("fs");
let fastcsv = require("fast-csv");
let model = require("./model");

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDB = async () => {
  const conn = await mongoose.connect("mongodb://localhost:27017/test1", {});

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};
connectDB();

let stream = fs.createReadStream("./credit_record.csv");
let csvData = [];
let count1 = 0;
let csvStream = fastcsv
  .parse()
  .on("data", function (data) {
    model.create({
      id: data[0],
      months_balance: data[1],
      status: data[2],
    });
    ++count1;
    console.log(count1);
  })
  .on("end", function () {
    csvData.shift();
  });

stream.pipe(csvStream);

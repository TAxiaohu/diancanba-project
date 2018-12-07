const mongoose = require("mongoose");
const diancanDB = "mongodb://localhost:27017/diancan";

mongoose.connect(diancanDB, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log('连接失败');
  } else {
    console.log('连接成功');
  }
});

module.exports = mongoose;
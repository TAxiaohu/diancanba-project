const mongoose = require("./index");

const { Schema } = mongoose;

const UserSchema = new Schema({
  admin: { type: Boolean },
  authorities: { type: Array },
  createdDate: { type: Date },
  enabled: { type: Boolean },
  fullName: { type: String },
  gender: { type: String },
  username: { type: String },
  roles: { type: Array },
  roleNames: { type: String },
  group: { type: Object },
});

module.exports = mongoose.model('User', UserSchema);
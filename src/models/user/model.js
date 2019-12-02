// models/answers/model.js
const mongoose = require("mongoose");
const schema = require("./schema");

// add hooks here
schema.pre("save", async function() {
await doStuff();
  await doMoreStuff();
});

const User = mongoose.model("User", schema);
module.exports = User;

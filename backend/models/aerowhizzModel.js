const mongoose = require("mongoose");

const aerowhizzSchema = mongoose.Schema(
  {
    postImagesLinks:[{ type: String }]
  },
  { timestamps: true }
);


const aerowhizz = mongoose.model("aerowhizz", aerowhizzSchema);

module.exports = aerowhizz;

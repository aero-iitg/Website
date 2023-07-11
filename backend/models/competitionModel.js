const mongoose = require("mongoose");

const competitionSchema = mongoose.Schema(
  {
    competitionName: { type: String, required: true },
    competitionDescription: { type: String},
    imageLink:{ type: String}
  },
  { timestamps: true }
);


const competition = mongoose.model("competition", competitionSchema);

module.exports = competition;

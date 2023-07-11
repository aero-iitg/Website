const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    eventName: { type: String, required: true },
    eventDescription: { type: String},
    imageLink:{ type: String}
  },
  { timestamps: true }
);


const event = mongoose.model("event", eventSchema);

module.exports = event;

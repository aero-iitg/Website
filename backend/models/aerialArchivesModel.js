const mongoose = require("mongoose");

const aerialArchivesSchema = mongoose.Schema(
  {
    postImagesLinks:[{ type: String }]
  },
  { timestamps: true }
);


const aerialArchives = mongoose.model("aerialArchives", aerialArchivesSchema);

module.exports = aerialArchives;

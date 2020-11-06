const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema(
  {
    Etype: { type: String, required: true },
    Ename: { type: String, required: true },
    Edescription: { type: String, required: true },
    Edate: { type: Date, required: true },
    Eplace: { type: String, required: true },
    ElocURL: { type: String, required: true },
    Eprice: { type: Number, required: true },
    EvidURL: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Event", eventSchema);

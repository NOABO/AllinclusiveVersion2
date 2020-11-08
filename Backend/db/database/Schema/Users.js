const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true , unique: true },
    roles: [{ type: 'String' }],
    isVerified: { type: Boolean, default: false },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
     passwordResetToken: String,
     passwordResetExpires: Date,
    specialNeed: { type: String, required: true },


    imgUrl: { type: String, required: true },

    //events  to do later
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);

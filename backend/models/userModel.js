const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);


UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await enteredPassword=== this.password;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;

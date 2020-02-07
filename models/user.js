// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email format prior to creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: /\S+@\S+\.\S+/
    },
    // The password cannot be null and must be between 6 and 50 characters in length
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: /^[0-9A-Za-z!@.,;:'"?-]{6,50}\z/
    }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = (password) => {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", (user) => {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};

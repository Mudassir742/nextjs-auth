const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "bad input" });
    }

    const existedUser = await User.findOne({ email: email });

    if (!existedUser) {
      return res.status(404).json({ error: "user not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existedUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "incorrect email or password" });
    }

    const token = jwt.sign(
      {
        name: existedUser.name,
        userId: existedUser._id,
        password: existedUser.password,
      },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      data: {
        name: existedUser.name,
        userID: existedUser._id,
        token: token,
      },
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
exports.userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "bad input" });
    }

    const isEmailAlreadyExists = await User.findOne({ email: email });

    if (isEmailAlreadyExists) {
      return res.status(409).json({ error: "email already exists" });
    }

    const newUser = new User({
      name,
      email,
      password,
    });

    const registerUser = await newUser.save();

    if (registerUser) {
      return res.status(200).json({
        data: { userID: registerUser._id, name: registerUser.name },
      });
    }
  } catch (err) {
    return res.status(500).json({ error: "unexpected error occurred" });
  }
};

const User = require('../models/userModel')

exports.getUserService = async id => {
  const user = await User.findOne({ _id: id })
  delete user._doc.password
  return user
}

exports.checkIfUserExistsService = async email => {
  return await User.findOne({ email })
}

exports.createUserService = async (email, hashedPw) => {
  return await User.create({
    email,
    password: hashedPw
  })
}

exports.deleteUserService = async email => {
  return await User.findOneAndDelete({ email })
}

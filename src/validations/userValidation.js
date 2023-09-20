var validator = require('validator')

exports.validateSignup = (email, pw, confirmPw) => {
  // console.log('email: ', email, 'pw: ', pw, 'confirmPw: ', confirmPw)
  try {
    if (!email || !pw || !confirmPw)
      return { ok: false, message: 'Please, fill all fields' }
    if (!validator.isEmail(email))
      return { ok: false, message: 'Email should be a valid address' }
    if (pw.length < 8)
      return {
        ok: false,
        message: 'Password must be 8 characters minimum'
      }
    if (pw !== confirmPw)
      return { ok: false, message: 'Passwords should be equal' }
    return { ok: true }
  } catch (err) {
    return false
  }
}

exports.validateLogin = (email, pw) => {
  try {
    if (!email || !pw) return { ok: false, message: 'Please, fill all fields' }
    if (!validator.isEmail(email))
      return { ok: false, message: 'Email should be a valid address' }
    return { ok: true }
  } catch (err) {
    return false
  }
}

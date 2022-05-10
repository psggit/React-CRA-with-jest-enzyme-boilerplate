const { emailRegex } = require('./regex')

module.exports = {
  validate: function (values) {
    const errors = {}

    if (!values.email) {
      errors.email = `Email is required`
    } else if (!emailRegex.test(values.email)) {
      errors.email = `Email is invalid`
    }

    if (!values.password) {
      errors.password = "Password is required"
    }

    return errors
  }
}
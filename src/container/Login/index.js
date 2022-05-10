import React, { useState } from "react"
import "Sass/login.scss"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import InputLabel from "@material-ui/core/InputLabel"
import InputAdornment from "@material-ui/core/InputAdornment"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import { validate } from "Utils/validators"
import useForm from "./form"
import Icon from "Components/Icon"
//import axios from "axios"

const useStyles = makeStyles(() => ({
  form: {
    "& > .input-field": {
      marginBottom: "40px"
    }
  }
}))

function Login () {
  const classes = useStyles()
  const {
    values,
    errors,
    handleChange,
    handleSubmit
  } = useForm(handleLogin, validate)
  const [showPasswordValue, setShowPasswordValue] = useState(false)

  const handleClickShowPassword = () => {
    setShowPasswordValue(!showPasswordValue)
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  function handleLogin () {
    const payload = {
      grant_type: "client_credentials",
      client_id: "2yiFwSQw9yipqxm0z7OdWXtLMqQa",
      client_secret: "MNgvSHNZEi04WrD_mAX3154WHLYa",
      // username: values.email,
      // password: values.password
    }
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    }
    // axios({
    //   method: "post", url: "https://identity-stg.trimble.com/token", data: payload, headers
    // })
    fetch("https://identity-stg.trimble.com/token", { method: "post", body: JSON.stringify(payload), headers })
      .then((response) => {
        console.log("response", response)
      })
      .catch((error) => {
        console.log("Error in logging in", error)
      })
  }

  return (
    <div id="login">
      <div className="logo-container">
        <Icon name="logo" />
      </div>
      <h2>Global SKU Dashboard</h2>
      <div>
        <form className={classes.form}>
          <TextField
            id="outlined-required"
            className="input-field"
            autoComplete="off"
            error={errors.email ? true : false}
            label="Email"
            name="email"
            onChange={handleChange}
            value={values.email || ""}
            helperText={errors.email ? `* ${errors.email}` : ""}
            variant="outlined"
            data-testid="email"
          />
          <FormControl className="input-field" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password" className={`${errors.password ? "Mui-error" : undefined}`}>Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPasswordValue ? "text" : "password"}
              name="password"
              autoComplete="off"
              data-testid="password"
              error={errors.password ? true : false}
              onChange={handleChange}
              value={values.password || ""}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPasswordValue ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
            {
              errors.password ?
                <FormHelperText id="outlined-weight-helper-text" className={`${errors.password ? "Mui-error" : ""}`}>* {errors.password}</FormHelperText>
                : ""
            }
          </FormControl>

          <div className="submit">
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={(e) => handleSubmit(e)}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
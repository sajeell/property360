import React from 'react'
import gql from 'graphql-tag.macro'
import { useMutation } from '../../apollo'

import '../../static/CompStyle.css'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import logo from '../../static/WhatsApp Image 2019-10-08 at 2.07.00 PM.jpeg'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    marginTop: '7%',
    justifyContent: 'center',
    width: '400px',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  image: {
    marginLeft: '100px',
    marginBottom: '10%',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

const LOGIN_MUTATION = gql`
  mutation LoginMutation($input: LoginMutationInput!) {
    login(input: $input) {
      viewer {
        id
        name
        email
      }
      token
    }
  }
`

const ASign = () => {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    email: '',
    password: '',
  })
  const [mutate] = useMutation(LOGIN_MUTATION)

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    mutate({
      variables: {
        input: values,
      },
    }).then(output => {
      console.log('mutated', output)
      localStorage.setItem('token', output.data.login.token)
    })
  }

  return (
    <div className={classes.wrapper}>
      <form className={classes.container} onSubmit={handleSubmit}>
        <img className={classes.image} src={logo} alt="logo" height="70px" width="200px" />
        <TextField
          id="outlined-name"
          label="Email"
          className={classes.textField}
          value={values.email}
          onChange={handleChange('email')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          className={classes.textField}
          value={values.password}
          onChange={handleChange('password')}
          margin="normal"
          variant="outlined"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="outlined" color="primary" className={classes.button} type="submit">
          Login
        </Button>
      </form>
    </div>
  )
}

export default ASign

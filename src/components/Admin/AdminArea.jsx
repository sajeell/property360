import React from 'react'
import gql from 'graphql-tag.macro'
import { useMutation } from '../../apollo'

import '../../static/CompStyle.css'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import logo from '../../static/WhatsApp Image 2019-10-08 at 2.07.00 PM.jpeg'
import TextField from '@material-ui/core/TextField'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
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
function Area() {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    area: '',
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
    <div className="admin-area-wrapper">
      <TextField
        id="outlined-name"
        label="Area"
        className={classes.textField}
        value={values.area}
        onChange={handleChange('area')}
        margin="normal"
        variant="outlined"
      />

      <Link to="/admin">
        <Button variant="outlined" color="primary" className={classes.button} type="submit">
          Add Area
        </Button>
      </Link>
    </div>
  )
}
export default Area

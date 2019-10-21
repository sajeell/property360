import React from 'react'
import gql from 'graphql-tag.macro'
import { useMutation } from '../../apollo'

import '../../static/CompStyle.css'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const ADD_LOCATION_MUTATION = gql`
  mutation addLocation($input: AddLocationMutationInput!) {
    addLocation(input: $input) {
      location {
        name
        id
      }
      viewer {
        id
      }
    }
  }
`
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

function AddLocation() {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    name: '',
  })
  const [mutate] = useMutation(ADD_LOCATION_MUTATION)

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    mutate({
      variables: {
        input: values,
      },
    }).then(output => {
      console.log('mutated', output)
    })
  }

  return (
    <div className="admin-location-wrapper">
      <form action="" onSubmit={handleFormSubmit}>
        <TextField
          id="outlined-name"
          label="Location"
          className={classes.textField}
          value={values.name}
          onChange={handleChange('name')}
          margin="normal"
          variant="outlined"
        />
        <Button variant="outlined" color="primary" className={classes.button} type="submit">
          Add Location
        </Button>
      </form>
    </div>
  )
}
export default AddLocation

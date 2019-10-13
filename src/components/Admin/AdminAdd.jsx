import React from 'react'
import gql from 'graphql-tag.macro'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Upload from './AdminUpload.jsx'
import Area from './AdminArea.jsx'
import { useQuery } from '../../apollo'

const ADMIN_ADD_QUERY = gql`
  query AdminAddQuery {
    listingTypes {
      id
      name
    }
    locations {
      id
      name
    }
  }
`

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '800px',
    marginLeft: '500px',
    marginTop: '50px',
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  text: {
    fontSize: '12px',
  },
}))

export default function AdminAdd() {
  const classes = useStyles()
  const [area, setArea] = React.useState('')
  const [commerce, setCommerce] = React.useState('')
  const [type, setType] = React.useState('')
  const [openArea, setOpenArea] = React.useState(false)
  const [openCommerce, setOpenCommerce] = React.useState(false)
  const [openType, setOpenType] = React.useState(false)

  const { data, loading, error } = useQuery(ADMIN_ADD_QUERY)
  if (error) {
    throw error
  }

  const locations = data ? data.locations : []
  const listingTypes = data ? data.listingTypes : []

  const handleChangeArea = event => {
    setArea(event.target.value)
  }
  const handleChangeCommerce = event => {
    setCommerce(event.target.value)
  }
  const handleChangeType = event => {
    setType(event.target.value)
  }

  const handleCloseArea = () => {
    setOpenArea(false)
  }

  const handleOpenArea = () => {
    setOpenArea(true)
  }

  const handleCloseCommerce = () => {
    setOpenCommerce(false)
  }

  const handleOpenCommerce = () => {
    setOpenCommerce(true)
  }

  const handleCloseType = () => {
    setOpenType(false)
  }

  const handleOpenType = () => {
    setOpenType(true)
  }
  return (
    <div className={classes.wrapper}>
      <Router>
        <form autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">Choose Area:</InputLabel>
            <Select
              open={openArea}
              onClose={handleCloseArea}
              onOpen={handleOpenArea}
              value={area}
              onChange={handleChangeArea}
              inputProps={{
                name: 'area',
                id: 'demo-controlled-open-select',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {locations.map(location => (
                <MenuItem key={location.id} href="#/action-1">
                  {location.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </form>
        <br />
        <form autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">Choose Commerce:</InputLabel>
            <Select
              open={openCommerce}
              onClose={handleCloseCommerce}
              onOpen={handleOpenCommerce}
              value={commerce}
              onChange={handleChangeCommerce}
              inputProps={{
                name: 'commerce',
                id: 'demo-controlled-open-select',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'rent'}>Rent</MenuItem>
              <MenuItem value={'sale'}>Sale</MenuItem>
            </Select>
          </FormControl>
        </form>
        <br />
        <form autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">Choose Type:</InputLabel>
            <Select
              open={openType}
              onClose={handleCloseType}
              onOpen={handleOpenType}
              value={type}
              onChange={handleChangeType}
              inputProps={{
                name: 'type',
                id: 'demo-controlled-open-select',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {listingTypes.map(listingType => (
                <MenuItem key={listingType.id} href="#/action-1">
                  {listingType.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Upload />
          <p className={classes.text}>
            Want to increase coverage area? <Link to="/addarea">Click Here!</Link>
          </p>
          <InputLabel>Description:</InputLabel>
          <Button variant="outlined" color="primary" className={classes.button} type="submit">
            Add Property
          </Button>
        </form>
        <Switch>
          <Route path="/addarea">
            <Area />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

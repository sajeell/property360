import React, { useState } from 'react'
import gql from 'graphql-tag.macro'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import { BrowserRouter as Router } from 'react-router-dom'
import Upload from './AdminUpload.jsx'
import AddLocation from './AdminAddLocation.jsx'
import { useQuery, useMutation } from '../../apollo'

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

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

const ADD_LISTING_MUTATION = gql`
  mutation($input: AddListingMutationInput!) {
    addListing(input: $input) {
      listing {
        id
        location {
          name
        }
      }
      viewer {
        name
      }
    }
  }
`

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '800px',
    marginLeft: '13%',
    marginTop: '50px',
  },
  button: {
    display: 'flex',
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

export default function AdminAdd(props) {
  const { className } = props
  const [areaModal, setAreaModal] = useState(false)

  const areaToggle = () => setAreaModal(!areaModal)
  const classes = useStyles()
  const [location, setLocation] = React.useState('')
  const [commerce, setCommerce] = React.useState('')
  const [type, setType] = React.useState('')
  const [openLocation, setOpenLocation] = React.useState(false)
  const [openCommerce, setOpenCommerce] = React.useState(false)
  const [openType, setOpenType] = React.useState(false)
  const [description, setDescription] = React.useState('')

  const [mutate] = useMutation(ADD_LISTING_MUTATION)
  const { data, error } = useQuery(ADMIN_ADD_QUERY)
  if (error) {
    throw error
  }

  const locations = data ? data.locations : []
  const listingTypes = data ? data.listingTypes : []

  function handleFormSubmit(e) {
    e.preventDefault()
    const values = {
      locationId: location,
      listingTypeId: type,
      commerce,
      description,
    }

    console.log('values', values)

    mutate({
      variables: {
        input: values,
      },
    }).then(output => {
      console.log(output)
    })
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  const handleChangeLocation = event => {
    setLocation(event.target.value)
  }
  const handleChangeCommerce = event => {
    setCommerce(event.target.value)
  }
  const handleChangeType = event => {
    setType(event.target.value)
  }

  const handleCloseLocation = () => {
    setOpenLocation(false)
  }

  const handleOpenLocation = () => {
    setOpenLocation(true)
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
      <Router forceRefresh>
        <form autoComplete="off" method="post" onSubmit={handleFormSubmit}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">Location:</InputLabel>
            <Select
              open={openLocation}
              onClose={handleCloseLocation}
              onOpen={handleOpenLocation}
              value={location}
              onChange={handleChangeLocation}
              inputProps={{
                name: 'location',
                id: 'demo-controlled-open-select',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {locations.map(location => (
                <MenuItem key={location.id} value={location.id} href="#/action-1">
                  {location.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">Commerce:</InputLabel>
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
                <MenuItem key={listingType.id} value={listingType.id} href="#/action-1">
                  {listingType.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Upload />
          <p className={classes.text}>
            Want to increase coverage location? <p onClick={areaToggle}>Click Here!</p>
          </p>
          <Modal isOpen={areaModal} toggle={areaToggle} className={className}>
            <ModalHeader toggle={areaToggle}>Add Location:</ModalHeader>
            <ModalBody>
              <AddLocation />
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={areaToggle}>
                Add Area
              </Button>
            </ModalFooter>
          </Modal>
          <InputLabel>Description:</InputLabel>
          <textarea style={{ resize: 'none' }} value={description} onChange={handleDescriptionChange}></textarea>
          <Button variant="outlined" color="primary" className={classes.button} type="submit">
            Add Property
          </Button>
        </form>
      </Router>
    </div>
  )
}

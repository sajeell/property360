import React, { useState } from 'react'
import '../static/CompStyle.css'
import Middle1 from './Middle1.jsx'
import Middle2 from './Middle2.jsx'
import Middle3 from './Middle3.jsx'
import Middle4 from './Middle4.jsx'
import LocationPopup from './Popups/LocationPopup'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
const Middle = props => {
  const { className } = props

  const [shopModal, setShopModal] = useState(false)
  const [houseModal, setHouseModal] = useState(false)
  const [appartModal, setAppartModal] = useState(false)
  const [plotModal, setPlotModal] = useState(false)
  const shopToggle = () => setShopModal(!shopModal)
  const houseToggle = () => setHouseModal(!houseModal)
  const appartToggle = () => setAppartModal(!appartModal)
  const plotToggle = () => setPlotModal(!plotModal)
  return (
    <div>
      <h3 id="middle-heading">We deal in all kinds of:</h3>
      <div className="middle-wrapper">
        <div className="middle-row-1">
          <div className="middle-row-item">
            <Button color="" onClick={appartToggle}>
              <Middle1 />
            </Button>
            <Modal isOpen={appartModal} toggle={appartToggle} className={className}>
              <ModalHeader toggle={appartToggle}>Apartments</ModalHeader>
              <ModalBody>
                <div className="apart-divs">
                  <LocationPopup listingTypeId="1" />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={appartToggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
          <div className="middle-row-item">
            <Button color="" onClick={houseToggle}>
              <Middle2 />
            </Button>
            <Modal isOpen={houseModal} toggle={houseToggle} className={className}>
              <ModalHeader toggle={houseToggle}>House:</ModalHeader>
              <ModalBody>
                <div className="house-divs">
                  <LocationPopup listingTypeId="2" />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={houseToggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
        <div className="middle-row-2">
          <div className="middle-row-item">
            <Button color="" onClick={plotToggle}>
              <Middle3 />
            </Button>
            <Modal isOpen={plotModal} toggle={plotToggle} className={className}>
              <ModalHeader toggle={plotToggle}>Plots:</ModalHeader>

              <ModalBody>
                <div className="plots-divs">
                  <LocationPopup listingTypeId="4" />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={plotToggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
          <div className="middle-row-item">
            <Button color="" onClick={shopToggle}>
              <Middle4 />
            </Button>
            <Modal isOpen={shopModal} toggle={shopToggle} className={className}>
              <ModalHeader toggle={shopToggle}>Shop:</ModalHeader>
              <ModalBody>
                <div className="shop-divs">
                  <LocationPopup listingTypeId="3" />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={shopToggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Middle

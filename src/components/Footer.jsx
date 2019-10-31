import React, { useState } from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import TwitterIcon from '@material-ui/icons/Twitter'
const Footer = props => {
  const { className } = props

  const [aboutModal, setAboutModal] = useState(false)
  const [careerModal, setCareerModal] = useState(false)

  const aboutToggle = () => setAboutModal(!aboutModal)
  const careerToggle = () => setCareerModal(!careerModal)

  return (
    <div className="footer-wrapper">
      <div className="footer-col-01">
        <div className="footer-title">
          <br />
          <p>PROPERTY360</p>
        </div>
        <p onClick={aboutToggle}>ABOUT US</p>
        <Modal isOpen={aboutModal} toggle={aboutToggle} className={className}>
          <ModalHeader toggle={aboutToggle}>ABOUT US</ModalHeader>
          <ModalBody>We are the pioneers in real estate</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={aboutToggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <p onClick={careerToggle}>CAREERS</p>
        <Modal isOpen={careerModal} toggle={careerToggle} className={className}>
          <ModalHeader toggle={careerToggle}>CAREERS</ModalHeader>
          <ModalBody>
            Send your CV/Resumè and Cover Letter at <a href="">lightimage3d@live.co.uk</a>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={careerToggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <br />
      </div>
      <div className="footer-col-02">
        <br />
        <p>
          Made with <FavoriteBorderIcon />
        </p>

        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
    </div>
  )
}

export default Footer

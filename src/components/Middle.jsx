import React, { useState } from "react";
import "../static/CompStyle.css";
import Middle1 from "./Middle1.jsx";
import Middle2 from "./Middle2.jsx";
import Middle3 from "./Middle3.jsx";
import Middle4 from "./Middle4.jsx";
import ShopPop from "./Popups/ShopPop.jsx";
import PlotPop from "./Popups/PlotPop.jsx";
import AppartmentPop from "./Popups/AppartmentPop.jsx";
import HousePop from "./Popups/HousePop.jsx";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const Middle = props => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <h3 id="middle-heading">We deal in all kinds of:</h3>
      <div className="middle-wrapper">
        <div className="middle-row-1">
          <div className="middle-row-item">
            <Button color="" onClick={toggle}>
              <Middle1 />
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle}>Appartments</ModalHeader>
              <ModalBody>
                <AppartmentPop />
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
          <div className="middle-row-item">
            <Button color="" onClick={toggle}>
              <Middle2 />
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle}>House:</ModalHeader>
              <ModalBody>
                <HousePop />
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
        <div className="middle-row-2">
          <div className="middle-row-item">
            <Button color="" onClick={toggle}>
              <Middle3 />
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle}>Plots:</ModalHeader>
              <ModalBody>
                <PlotPop />
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
          <div className="middle-row-item">
            <Button color="" onClick={toggle}>
              <Middle4 />
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle}>Shop:</ModalHeader>
              <ModalBody>
                <ShopPop />
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;

import React from 'react'
import '../static/CompStyle.css'
const Contact = () => {
  return (
    <div className="contact-wrapper">
      <form>
        <div className="contact-us-header">
          <h3>Contact Us</h3>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <input type="text" className="form-control " id="validationServer01" placeholder="First name" required></input>
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6 mb-3">
            <input type="text" className="form-control " id="validationServer02" placeholder="Last name" required></input>
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <input type="text" className="form-control" id="validationServer03" placeholder="City" required></input>
            <div className="invalid-feedback">Please provide a valid city.</div>
          </div>
          <div className="col-md-6 mb-3">
            <input type="text" className="form-control" id="validationServer04" placeholder="State" required></input>
            <div className="invalid-feedback">Please provide a valid state.</div>
          </div>
        </div>

        <div className="input-group ">
          <div className="input-group-prepend">
            <span className="input-group-text">Description:</span>
          </div>
          <textarea className="form-control" aria-label="With textarea"></textarea>
        </div>
        <p></p>
        <button className="btn btn-primary" type="submit">
          Submit form
        </button>
      </form>

     
    </div>
  )
}

export default Contact

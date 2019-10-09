import React from 'react'
import '../static/CompStyle.css'
const Contact = () => {
  return (
    <div className="contact-wrapper">
      <form>
        <h3>Contact Us:</h3>

        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationServer01">First name</label>
            <input
              type="text"
              className="form-control "
              id="validationServer01"
              placeholder="First name"
              required
            ></input>
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationServer02">Last name</label>
            <input
              type="text"
              className="form-control "
              id="validationServer02"
              placeholder="Last name"
              required
            ></input>
            <div className="valid-feedback">Looks good!</div>
          </div>
          <br />
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationServer03">City</label>
            <input
              type="text"
              className="form-control is-invalid"
              id="validationServer03"
              placeholder="City"
              required
            ></input>
            <div className="invalid-feedback">Please provide a valid city.</div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationServer04">State</label>
            <input
              type="text"
              className="form-control is-invalid"
              id="validationServer04"
              placeholder="State"
              required
            ></input>
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

      <div>
        <img
          src="http://images.clipartpanda.com/phone-icon-vector-11954230141737421095rickvanderzwet_Phone.svg.med.png"
          className="contact-logo"
          alt
        ></img>
      </div>
    </div>
  )
}

export default Contact

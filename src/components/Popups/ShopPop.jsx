import React from "react";
import "../../static/CompStyle.css"; // Importing CSS file

export default function Plots() {
  return (
    <div className="popup-add">
      <div className="pop-item-01">
        <img
          src={
            "https://www.totalparco.com.pk/sites/g/files/wompnd651/f/styles/paragraph_media_960/public/atoms/image/img_0463_1_0.jpg?itok=_IH5uICP"
          }
          height={"250"}
          width={"250"}
          alt="Plots not found"
        />
        <p>Type: Shop</p>
        <p>Area: G-15</p>
        <p>
          Description:
          <br />
          Corner Shop in a very beautiful area in a very affordable rate.
        </p>
        <p>Price: 7 Million PKR/- (Negotiable)</p>
        <p>Call for further details</p>
      </div>
    </div>
  );
}

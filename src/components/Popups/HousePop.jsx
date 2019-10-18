import React from "react";
import "../../static/CompStyle.css"; // Importing CSS file

import gql from "graphql-tag.macro";

import { useQuery } from "../../apollo";

const LISTING_QUERY = gql`
  query AdminProfileQuery {
    listings {
      id
      listingType {
        id
        name
      }
      location {
        id
        name
      }
      commerce
      description
    }
    viewer {
      name
    }
  }
`;
export default function HousePop() {
  const { data, loading, error } = useQuery(LISTING_QUERY);
  if (error) {
    throw error;
  }

  const listings = data ? data.listings : [];

  return (
    <div className="popup-add">
      <div className="pop-item-01">
        <img
          src={
            "https://www.totalparco.com.pk/sites/g/files/wompnd651/f/styles/paragraph_media_960/public/atoms/image/img_0463_1_0.jpg?itok=_IH5uICP"
          }
          height={"250"}
          width={"250"}
          alt="House not found"
        />
        {listings.map(listing => (
          <div>
            <p>
              Type: <span>{listing.listingType.name}</span>
            </p>
            <p>
              Commerce: <span>{listing.commerce}</span>
            </p>
            <p>
              Location: <span>{listing.location.name}</span>
            </p>
            <p>
              Description: <span>{listing.description}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

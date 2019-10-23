import React from 'react'
import gql from 'graphql-tag.macro'
import { useQuery } from '../../apollo'

import '../../static/CompStyle.css'
const POP_UP_QUERY = gql`
  query PopupQuery($listingTypeId: ID) {
    listings(listingTypeId: $listingTypeId) {
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
`
export default function ApartmentPop({ listingTypeId }) {
  console.log('variables', {
    listingTypeId,
  })
  const { data, loading, error } = useQuery(POP_UP_QUERY, {
    variables: {
      listingTypeId,
    },
  })
  if (error) {
    throw error
  }

  const listings = data ? data.listings : []

  return (
    <div>
      <div>
        {listings.length > 0 ? (
          listings.map(listing => (
            <div className="popup-query">
              <span>{listing.location.name}</span>
              <span>{listing.listingType.name}</span>
              <span>{listing.commerce}</span>
              <span>{listing.description}</span>
            </div>
          ))
        ) : (
          <img
            src={
              'https://www.totalparco.com.pk/sites/g/files/wompnd651/f/styles/paragraph_media_960/public/atoms/image/img_0463_1_0.jpg?itok=_IH5uICP'
            }
            height={'250'}
            width={'250'}
            alt="Shops not found!"
          />
        )}
      </div>
    </div>
  )
}

/*<Card className={classes.card}>
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
<CardActionArea>
<CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card> */

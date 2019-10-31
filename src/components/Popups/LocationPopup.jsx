import React from 'react'
import gql from 'graphql-tag.macro'
import { useQuery } from '../../apollo'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import '../../static/CompStyle.css'
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
})
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
  const { data, error } = useQuery(POP_UP_QUERY, {
    variables: {
      listingTypeId,
    },
  })
  if (error) {
    throw error
  }
  const classes = useStyles()
  const listings = data ? data.listings : []

  return (
    <div>
      <div>
        {listings.length > 0 ? (
          listings.map(listing => (
            <div className="popup-query">
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Image Not Found!!"
                    height="140"
                    image="https://www.totalparco.com.pk/sites/g/files/wompnd651/f/styles/paragraph_media_960/public/atoms/image/img_0463_1_0.jpg?itok=_IH5uICP"
                    title="Property"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h6">
                      Property Details:
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      <span>{listing.location.name}</span>
                      <br />
                      <span>{listing.listingType.name}</span>
                      <br />
                      <span>{listing.commerce}</span>
                      <br />
                      <span>{listing.description}</span>
                      <br />
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions></CardActions>
              </Card>
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
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   card: {
//     maxWidth: 345,
//   },
// });

// export default function ImgMediaCard() {
//   const classes = useStyles();

//   return (
//     <Card className={classes.card}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           alt="Contemplative Reptile"
//           height="140"
//           image="/static/images/cards/contemplative-reptile.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             <span>{listing.location.name}</span>
//<span>{listing.listingType.name}</span>
//<span>{listing.commerce}</span>
//<span>{listing.description}</span>
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );

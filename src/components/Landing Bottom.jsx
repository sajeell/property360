import React from 'react'
import '../static/CompStyle.css'
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const images = [
    {
        url: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/0f58350048b1b544393b5651242e7eb5-shah-faisal-mosque.jpg?fit=crop&w=960&h=416',
        title: 'F Sectors',
        width: '40%',
    },
    {
        url: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/0f58350048b1b544393b5651242e7eb5-shah-faisal-mosque.jpg?fit=crop&w=960&h=416',
        title: 'G Sectors',
        width: '40%',
    },
    {
        url: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/0f58350048b1b544393b5651242e7eb5-shah-faisal-mosque.jpg?fit=crop&w=960&h=416',
        title: 'I Sectors',
        width: '40%',
    },
    {
        url: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/0f58350048b1b544393b5651242e7eb5-shah-faisal-mosque.jpg?fit=crop&w=960&h=416',
        title: 'D Sectors',
        width: '40%',
    },

]

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        padding: '10%',
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },

    },
    focusVisible: {},
    imageButton: {
        padding: '3%',

        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        padding: '5px',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',

        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));
const LBottom = () => {
    const classes = useStyles();
    return (
        <div className="lbottom-wrapper">
            <div className="jumbotron">
                <h3>History</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In similique repellendus tempora esse beatae, totam et eaque, dolorem voluptatum praesentium </p>
                <h3>We deal in:</h3>
                <div className="image-sectors">

                    <div className={classes.root}>
                        {images.map(image => (
                            <ButtonBase
                                focusRipple
                                key={image.title}
                                className={classes.image}
                                focusVisibleClassName={classes.focusVisible}
                                style={{
                                    width: image.width,

                                }}
                            >
                                <span
                                    className={classes.imageSrc}
                                    style={{
                                        backgroundImage: `url(${image.url})`,
                                    }}
                                />
                                <span className={classes.imageBackdrop} />
                                <span className={classes.imageButton}>
                                    <Typography
                                        component="span"
                                        variant="subtitle1"
                                        color="inherit"
                                        className={classes.imageTitle}
                                    >
                                        {image.title}
                                        <span className={classes.imageMarked} />
                                    </Typography>
                                </span>
                            </ButtonBase>
                        )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default LBottom;
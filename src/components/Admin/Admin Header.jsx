import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import logo from '../../static/WhatsApp Image 2019-10-08 at 2.07.00 PM.jpeg'
import '../../static/CompStyle.css'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        fontSize: '25px'
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    }
}))

export default function AdminHeader() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar position="static" color="black">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <img src={logo} alt="logo" height="70px" width="200px" />
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
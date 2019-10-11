import React from 'react'
import '../../static/CompStyle.css'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import logo from '../../static/WhatsApp Image 2019-10-08 at 2.07.00 PM.jpeg'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        marginTop: '7%',
        justifyContent: 'center',
        width: '400px'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    dense: {
        marginTop: theme.spacing(2)
    },
    menu: {
        width: 200
    },
    button: {
        margin: theme.spacing(1)
    },
    input: {
        display: 'none'
    },
    image: {
        marginLeft: '100px',
        marginBottom: '10%'
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'center'
    }
}))

const ASign = () => {
    const classes = useStyles()
    const [values, setValues] = React.useState({
        name: '',
        password: ''
    })

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }


    return (
        <div className={classes.wrapper}>


            <div className={classes.container}>
                <img className={classes.image} src={logo} alt="logo" height="70px" width="200px" />
                <TextField
                    id="outlined-name"
                    label="Name"
                    className={classes.textField}
                    value={values.name}
                    onChange={handleChange('name')}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    className={classes.textField}
                    value={values.password}
                    onChange={handleChange('password')}
                    margin="normal"
                    variant="outlined"
                    type="password"
                    autoComplete="current-password"
                />
                <Button variant="outlined" color="primary" className={classes.button}>
                    Login
                </Button>

            </div>


        </div>
    )
}

export default ASign

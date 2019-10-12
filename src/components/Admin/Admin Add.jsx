import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Upload from './Admin Upload.jsx';
import Area from './Admin Area.jsx';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '800px',
        marginLeft: '500px',
        marginTop: '50px'
    },
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    text: {
        fontSize: '12px'
    },
}));

export default function Add() {
    const classes = useStyles();
    const [area, setArea] = React.useState('');
    const [commerce, setCommerce] = React.useState('');
    const [type, setType] = React.useState('');
    const [openArea, setOpenArea] = React.useState(false);
    const [openCommerce, setOpenCommerce] = React.useState(false);
    const [openType, setOpenType] = React.useState(false);

    const handleChangeArea = event => {
        setArea(event.target.value);
    };
    const handleChangeCommerce = event => {
        setCommerce(event.target.value);
    };
    const handleChangeType = event => {
        setType(event.target.value);
    };

    const handleCloseArea = () => {
        setOpenArea(false);
    };

    const handleOpenArea = () => {
        setOpenArea(true);
    };

    const handleCloseCommerce = () => {
        setOpenCommerce(false);
    };

    const handleOpenCommerce = () => {
        setOpenCommerce(true);
    };


    const handleCloseType = () => {
        setOpenType(false);
    };

    const handleOpenType = () => {
        setOpenType(true);
    };
    return (
        <div className={classes.wrapper}>
            <Router>

                <form autoComplete="off">
                    {/* <Button className={classes.button} onClick={handleOpen}>
                Open the select
            </Button> */}
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="demo-controlled-open-select">Choose Area:</InputLabel>
                        <Select
                            open={openArea}
                            onClose={handleCloseArea}
                            onOpen={handleOpenArea}
                            value={area}
                            onChange={handleChangeArea}
                            inputProps={{
                                name: 'area',
                                id: 'demo-controlled-open-select',
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'G-15'}>G-15</MenuItem>
                            <MenuItem value={'F-15'}>F-15</MenuItem>
                            <MenuItem value={'F-16'}>F-16</MenuItem>

                        </Select>
                    </FormControl>
                </form>
                <br />
                <form autoComplete="off">
                    {/* <Button className={classes.button} onClick={handleOpen}>
                Open the select
            </Button> */}
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="demo-controlled-open-select">Choose Commerce:</InputLabel>
                        <Select
                            open={openCommerce}
                            onClose={handleCloseCommerce}
                            onOpen={handleOpenCommerce}
                            value={commerce}
                            onChange={handleChangeCommerce}
                            inputProps={{
                                name: 'commerce',
                                id: 'demo-controlled-open-select',
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'rent'}>Rent</MenuItem>
                            <MenuItem value={'sale'}>Sale</MenuItem>
                        </Select>
                    </FormControl>
                </form>
                <br />
                <form autoComplete="off">
                    {/* <Button className={classes.button} onClick={handleOpen}>
                Open the select
            </Button> */}

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="demo-controlled-open-select">Choose Type:</InputLabel>
                        <Select
                            open={openType}
                            onClose={handleCloseType}
                            onOpen={handleOpenType}
                            value={type}
                            onChange={handleChangeType}
                            inputProps={{
                                name: 'type',
                                id: 'demo-controlled-open-select',
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'appartment'}>Appartment</MenuItem>
                            <MenuItem value={'house'}>House</MenuItem>
                            <MenuItem value={'shop'}>Shop</MenuItem>
                            <MenuItem value={'plot'}>Plot</MenuItem>
                        </Select>
                    </FormControl>
                    <Upload />
                    <p className={classes.text}>Want to increase coverage area?  <Link to="/addarea">Click Here!</Link></p>
                    <Button variant="outlined" color="primary" className={classes.button} type="submit">
                        Add Property
                </Button>
                </form>
                <Switch>
                    <Route path="/addarea">
                        <Area />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
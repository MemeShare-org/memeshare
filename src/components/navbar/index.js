import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar as MaterialToolbar, Typography, Box, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    buttonLink: {
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer',
        marginRight: '10px'
    },
    link: {
        color: 'white',
        cursor: 'pointer',
        textDecoration: 'none'
    }
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <MaterialToolbar variant='regular'>
                    <Box display='flex' flexGrow={1}>
                        <Typography variant='h6'>React Boilerplate</Typography>
                    </Box>
                    <Box display='flex'>
                        <Button
                            className={classes.buttonLink}
                            color="inherit"
                        >
                            <Link
                                to='/'
                                className={classes.link}
                            >
                                Home
                            </Link>
                        </Button>
                        <Button
                            className={classes.buttonLink}
                            color="inherit"
                        >
                            <Link
                                className={classes.link}
                                to='/other'
                            >
                                Other
                            </Link>
                        </Button>
                        <Button
                            className={classes.buttonLink}
                            color="inherit"
                        >
                            <Link
                                className={classes.link}
                                to='/contact'
                            >
                                Contact
                            </Link>
                        </Button>
                    </Box>
                </MaterialToolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
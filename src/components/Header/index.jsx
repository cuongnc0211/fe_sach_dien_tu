import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <LocalLibraryIcon className={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">SachDienTu</Link>
          </Typography>

          <NavLink className={classes.link} to="/authors">
            <Button color="inherit">Authors</Button>
          </NavLink>
          <NavLink className={classes.link} to="/categories">
            <Button color="inherit">Categories</Button>
          </NavLink>

          <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
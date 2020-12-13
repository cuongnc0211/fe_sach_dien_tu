import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import bookApi from 'api/bookApi';
import React, { useEffect, useState } from 'react';
import BookList from './components/BookList';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function BookFeature(props) {
  const classes = useStyles();
  let[booksList, setBookList] = useState([]);

  const params = {
    limit: '20'
  }
  useEffect(() => {
    const fetchBook = async () => {
      const result = await bookApi.getAll(params);
      setBookList(result)
    }

    fetchBook();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <div className={classes.root}>
          <BookList bookList={ booksList } />
        </div>
      </Container>
    </React.Fragment>
  );
}

export default BookFeature;
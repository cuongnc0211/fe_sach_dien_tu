import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import BookItem from '../BookItem';

BookList.propTypes = {
  bookList: PropTypes.array
};

function BookList(props) {
  const { bookList } = props;

  return (
    <Fragment>
      <Grid container justify="center" spacing={3}>
        {bookList.map((book) => (
          <BookItem key={ book.id } book={book} />
        ))}
      </Grid>
    </Fragment>
  );
}

export default BookList;
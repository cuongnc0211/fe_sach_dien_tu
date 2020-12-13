import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import './Style.scss';

BookItem.propTypes = {
  book: PropTypes.object
};

function BookItem(props) {
  const { book } = props;

  return (
    <Grid item xs={3} key={book.id}>
      <div className='item'>
        <div className='cover'>
          <a href="#">
            <img src={book.thumb_url} alt="thumb"/>
          </a>
        </div>
        <div className='info'>
          <a href='#'>
            {book.title}
          </a>
        </div>
      </div>
    </Grid>
  );
}

export default BookItem;
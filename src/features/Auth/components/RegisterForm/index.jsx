import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import InputField from 'components/form-controls/inputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";

const useStyle = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(4),
  },

  avatar: {
    alignItems: 'center',
    margin: '0px auto',
    backgroundColor: theme.palette.secondary.main,
  },

  title: {
    textAlign: 'center',
    paddingTop: theme.spacing(1),
  },

  submit: {
    margin: theme.spacing(3, 0, 2, 0)
  }
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyle();

  const schema = yup.object().shape({
    title: yup.string()
      .required('Please enter title')
      .min(3, 'Title too short'),
  });

  const form = useForm({
    defaultValues: {
      full_name: '',
      email: '',
      password: '',
      retype_password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      console.log(values)
      onSubmit(values)
    }

    form.reset();
  }

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography className={classes.title}>
        Create An Account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="full_name" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <InputField name="password" label="Password" form={form} />
        <InputField name="retype_password" label="Retype Password" form={form} />

        <Button variant="contained" color="primary" className={classes.submit}
          fullWidth>

          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
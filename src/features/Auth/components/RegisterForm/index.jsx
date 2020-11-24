import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import InputField from 'components/form-controls/inputField';
import PasswordField from 'components/form-controls/passwordField';
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
    full_name: yup.string()
      .required('Please enter this field')
      .test('Should enter at least 2 words', 'Please enter at least 2 words', (value) => {
        console.log(value);
        return value.split(' ').length >= 2;
      }),

    email: yup.string()
      .required('Please enter this field')
      .email('Please enter email in correct format'),
    
    password: yup.string()
      .required('Please enter password')
      .min(6, 'Please enter password at least 6 characters'),
    
    retype_password: yup.string()
      .required('Please retype your password')
      .oneOf([yup.ref('password')], 'Password does not match')
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
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField name="retype_password" label="Retype Password" form={form} />

        <Button type="submit" variant="contained" color="primary" className={classes.submit}
          fullWidth>

          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
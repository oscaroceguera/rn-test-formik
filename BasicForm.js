import React from 'react';
 import { Formik } from 'formik';
 import {Button, View, Text} from 'react-native'
 import { Input } from 'react-native-elements';
import * as Yup from 'yup'

const validateSchema = Yup.object().shape({
  firstName: Yup.string()
    .required()
    .min(2, 'Demmasido corto')
    .max(10, 'Demmasido largo'),
  lastName: Yup.string()
    .required()
    .min(2, 'Demasiado corto')
    .max(10, 'Demmasido largo'),
  email: Yup.string()
    .email('Email invalido')
    .required()
})

const BasicForm = () => {

  return (
    <Formik
      initialValues={{
        email: '',
        firstName: '',
        lastName: ''
      }}
      validationSchema={validateSchema}
      onSubmit={ values => console.log('values', values)}
    >
      {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => (
        <View>
          <Input
            placeholder='First Name'
            onBlur={handleBlur('firstName')}
            onChangeText={handleChange('firstName')}
            value={values.firstName}
            errorStyle={{ color: 'red' }}
            errorMessage={touched.firstName && errors.firstName}
          />
          <Input
            placeholder='Last Name'
            onBlur={handleBlur('lastName')}
            onChangeText={handleChange('lastName')}
            value={values.lastName}
            errorStyle={{ color: 'red' }}
            errorMessage={touched.lastName && errors.lastName}
          />
          <Input
            placeholder='Email'
            onBlur={handleBlur('email')}
            onChangeText={handleChange('email')}
            value={values.email}
            errorStyle={{ color: 'red' }}
            errorMessage={touched.email && errors.email}
          />
          <Text>
            {errors.email && errors.firstName && errors.lastName ? 'Invalid Fields' : null}
          </Text>
          <Button onPress={handleSubmit} title='Submit' />
        </View>
      )}
    </Formik>
  )
}

export default BasicForm;
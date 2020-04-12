import {Form,Formik,ErrorMessage,Field} from 'formik';
import SignupSchema from './validation-schema';
import React from 'react';
const SignupForm = props => {
    return (
        <Formik
        initialValues ={
            {
                username: '',
                fullName: '',
                phoneNumber: '',
                password: '',
                rePassword: '',
                emailAddress: ''
            }
        }
        validationSchema = {SignupSchema}
        validate = {
            values => {
                const errors = {}
                if(values.password !== values.rePassword){
                    errors.rePassword = 'Re typed password is not same'
                }
                return errors;
            }
        }
        onSubmit = {
            (values,{setSubmitting})=>{
                setSubmitting(false)
                props.registerHandler(values)
            }
        }
        >
        {
            ({
                isSubmitting
            })=>(
                <Form className="container-fluid">
                    <div className="form-row">
                        <div className="form-group col-md-6 col-12">
                            <label htmlFor="fullName">Full Name</label>
                            <Field type="text" placeholder= 'Full Name' name = 'fullName' className="form-control"/>
                            <ErrorMessage name='fullName'>{msg => <div className="text-danger">{msg}</div> }</ErrorMessage>
                        </div>
                        <div className="form-group col-md-6 col-12">
                            <label htmlFor="username">Username</label>
                            <Field type="text" placeholder= 'User Name' name = 'username' className="form-control"/>
                            <ErrorMessage name='username'>{msg => <div className="text-danger">{msg}</div> }</ErrorMessage>
                        </div>
                        <div className="form-group col-md-6 col-12">
                            <label htmlFor="emailAddress">Email Address</label>
                            <Field type="email" placeholder= 'Email Address' name = 'emailAddress' className="form-control"/>
                            <ErrorMessage name='emailAddress'>{msg => <div className="text-danger">{msg}</div> }</ErrorMessage>
                        </div>
                        <div className="form-group col-md-6 col-12">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <Field type="text" placeholder= 'Phone Number' name = 'phoneNumber' className="form-control"/>
                            <ErrorMessage name='phoneNumber'>{msg => <div className="text-danger">{msg}</div> }</ErrorMessage>
                        </div>
                        <div className="form-group col-md-6 col-12">
                            <label htmlFor="password">Password</label>
                            <Field type="password" placeholder= 'password' name = 'password' className="form-control"/>
                            <ErrorMessage name='password'>{msg => <div className="text-danger">{msg}</div> }</ErrorMessage>
                        </div>
                        <div className="form-group col-md-6 col-12">
                            <label htmlFor="rePassword">Re Password</label>
                            <Field type="password"  placeholder= 'Re Password' name = 'rePassword' className="form-control"/>
                            <ErrorMessage name='rePassword'>{msg => <div className="text-danger">{msg}</div> }</ErrorMessage>
                        </div>
                        <button className="btn btn-success col-12" type='submit' disabled = {isSubmitting}>Signup</button>
                    </div>
                </Form>
            )
        }
        </Formik>
    )
}

export default SignupForm;
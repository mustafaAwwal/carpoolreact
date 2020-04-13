import {Formik,Field,ErrorMessage,Form} from 'formik';
import React from 'react';
import * as Yup from 'yup';
const SearchBarForm = props=> {
    let cities = props.cities.length === 0 ? null: props.cities.map((city,i)=>(
        <option value={city.name} key={i}>{city.name}</option>
    ))
    return (
        <Formik
            initialValues = {{
                departure: '',
                destination: '',
                departureDate: ''
            }}
            validationSchema= {SearchValidationSchema}
            onSubmit = {
                (values,{setSubmitting})=>{
                    setSubmitting(false)
                    props.formSubmission(values);
                }
            }
        >
            {
                ({isSubmitting})=>{

                    return <Form className='container-fluid'>
                        <div className="form-row">
                            <div className="form-group col-lg-3 col-md-6 col-12">
                                <label htmlFor="">Select Departure City</label>
                                <Field as='select' name='departure' className='custom-select w-100'>
                                    <option value="">Select Departure City</option>
                                    {cities}
                                </Field>
                                <ErrorMessage name='departure'>{(msg)=><p className='text-danger'>{msg}</p>}</ErrorMessage>
                            </div>
                            <div className="form-group col-lg-3 col-md-6 col-12">
                                <label htmlFor="">Select Destination City</label>
                                <Field as='select' name='destination' className='custom-select w-100'>
                                    <option value="">Select Destination City</option>
                                    {cities}
                                </Field>
                                <ErrorMessage name='destination'>{(msg)=><p className='text-danger'>{msg}</p>}</ErrorMessage>
                            </div>
                            <div className="form-group col-lg-3 col-md-6 col-12">
                                <label htmlFor="">Select Date</label>
                                <Field type='date' name='departureDate' className='form-control' placeholder='Departure Date'/>
                            </div>
                            <div className="form-group col-lg-3 col-md-6 col-12 d-flex align-items-end justify-content-between">
                                <button className="btn btn-success rounded-pill" type='button'>Pick(X,Y)</button>
                                <button className="btn btn-success rounded-pill" type='submit' disabled={isSubmitting}>Search</button>
                            </div>
                        </div>
                    </Form>

                }

            }

        </Formik>
    )
}

export default SearchBarForm;

export const SearchValidationSchema = Yup.object().shape({
    departure: Yup.string().required('Departure field is required'),
    destination: Yup.string().required('Destination field is required'),
    departureDate: Yup.date().required('Date is required')
})
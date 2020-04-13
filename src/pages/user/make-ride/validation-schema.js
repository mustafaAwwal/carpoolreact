import * as Yup from 'yup';
export const validationSchema = Yup.object().shape({
    departure: Yup.string().required('Departure is required'),
    destination: Yup.string().required('Destination is required'),
    carRegistration: Yup.string().required('Plz enter registration number'),
    carDescription: Yup.string().required('Ener car description'),
    departureDescription: Yup.string().required('Departure Description is required'),
    availableSeats:  Yup.number().required('Available Seats required').min(1,'Show be atleast 1').max(3,'Max can be 3'),
    estReachingTime: Yup.number().required('Est reaching time is required').min(1),
    departureDate: Yup.date().required('Date is required')
})
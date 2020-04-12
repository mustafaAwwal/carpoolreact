import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    username: Yup.string().required('Username is required'),
    emailAddress: Yup.string()
    .email('Invalid Email Address')
    .required('Email is required'),
    phoneNumber: Yup.string()
    .length(10,'Number is not accurate')
    .required('Phone number is required'),
    password: Yup.string()
    .min(8,'Password should be minimum 8 length')
    .required('Password is required'),
    rePassword: Yup.string()
    .min(8,'Retype password length should also be same')
    .required('Plz re type password')
    
})
export default SignupSchema;
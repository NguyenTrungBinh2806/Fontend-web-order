import { match } from 'assert';
import * as yup from 'yup';

export const schema = yup.object(
    {
        name: yup.string().required('Name is required').matches(/^[a-zA-Z\s]*$/,
        "Name only accept characters and spaces"
        ),
        // matches: 
        // 1. ^: start string
        // 2. [a-zA-Z]: accept from a-z to A-Z
        // 3. \s: accept spaces
        // 4. *: can be empty
        // 5. $: end string
        phoneNumber: yup.string().required('Phone number is required').matches(/^[0-9]*$/
        , 'Phone number only accept numbers'
        ),
        line1: yup.string().required('Address is required'),
        suburb: yup.string().required('City is required'),
        postcode: yup.string().required('Postcode is required').matches(/^[0-9]*$/,
        "Postcode only accept numbers"
        ),
        countryCode: yup.string().required('Country code is required'),
        email: yup.string().required('Email is required').email('Email is invalid'),
    }
)

export const defaultValue = { 
    name: '',
    phoneNumber: '',
    line1: '',
    suburb: '',
    postcode: '',
    countryCode: '',
    email: '',
}
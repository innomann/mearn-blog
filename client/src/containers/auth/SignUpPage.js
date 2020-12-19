import React, {useState} from 'react'
import SignUp from '../../components/auth/SignUp'
import Validate from '../../components/form/Validate';
import registerUser from '../../actions/authActions'
import {useHistory} from 'react-router-dom'

const SignUpPage = () => {
    const history =useHistory()
const [user, setUser] = useState({
    user_name: "",
    email: "",
    password: "",
    errors: {}
    });

    const handleChange = e => {
        setUser ({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const handleBlur = e => { 
        const {name,value} = e.target;
        const err = {...user.errors, ...Validate(name,value).errors }
        setUser({...user, errors:{...err}})
    }

    const handleSubmit = e => {
        e.preventDefault()
        const {user_name,email,password} = user
        registerUser({user_name,email,password}, history) 
    }
    return (
        <SignUp
        type="text"
        user = {{...user}}
        onChange= {handleChange}
        onBlur = {handleBlur}
        onSubmit = {handleSubmit}
        />
    )
}

export default SignUpPage

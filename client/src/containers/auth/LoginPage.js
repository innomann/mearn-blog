import React,{useState, useEffect} from 'react'
import { loginUser } from '../../actions/authActions'
import Login from '../../components/auth/Login'
import Validate from '../../components/form/Validate'


function LoginPage() {

    const [user,setUser] = useState({
        email:"",
        password:"",
        errors:{}
    })

    const [message, setMessage] = useState("");
    useEffect(() => {
        if(localStorage.loginMessage){
            setMessage(localStorage.loginMessage)
            localStorage.setItem("loginMassage","")
        }     
    }, [])

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name] :e.target.value
        })
    }

    const handleBlur = e => {
        const {name,value} = e.target
        const error ={ ...user.errors, ...Validate(name,value).errors}
        setUser({...user, errors:{ ...error}})
    }

    const handleSubmit = e => {
        e.preventDefault()
        const {email,password} = user
        loginUser({email,password})
    }

    return (
        <Login 
        message = {message}
        user = {{...user}}
        onBlur = {handleBlur}
        onChange = {handleChange}
        onSubmit = {handleSubmit}
        />
    )
}

export default LoginPage

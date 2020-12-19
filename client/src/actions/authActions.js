import axios from 'axios'

const registerUser = (userData,history) => {
    console.log("got user",userData)
    
    axios.post("/api/users/signup",userData)
    .then(res=> {
        localStorage.setItem(
            "loginMessage",
            "Successfully registered. Login to continue"
        );
        console.log("SuccessuRegisteredUser");
        history.push("/login")
    })
    .catch(err =>{
        console.log(err)
    })
}
 
export default registerUser

export const loginUser = (userData) => {
    console.log("gotUserInaAuthActions",userData)
    axios.post("/api/users/login",userData)
    .then(res=> {
        const {token} = res.data
        console.log("User successiful loggedin",token)

    })
    .catch(err => {
        console.log(err.message)
    })

}




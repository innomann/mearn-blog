import axios from 'axios'

const registerUser = (userData,history) => {
    console.log("got user",userData)
    
    axios.post("/api/users/signup",userData)
    .then(res=> {
        console.log("SuccessuRegisteredUser");
        history.push("/")
    })
    .catch(err =>{
        console.log(err)
    })
}
 
export default registerUser


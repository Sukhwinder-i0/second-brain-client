import axios from 'axios';
import { email, password, username } from '../hooks/common.js';


export const handleSingup = async () => {
const backendUrl = import.meta.env.VITE_BACKEND_URL
console.log("backend url:", backendUrl)

    try {
        const response = await axios.post(`${backendUrl}/api/v1/signup`, {
            username: username(),
            email: email(),
            password: password()
        })

        console.log("Response:", response.data)
        alert("You have signed up")
        window.location.href = "/signin"

        
    

    } catch (error) {
        console.log("Couldn't signup",error)
    }
}
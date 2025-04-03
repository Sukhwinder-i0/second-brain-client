import axios from "axios"
import { password, username } from "../hooks/common.js"

export const handleSignin = async() => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    try {
        const response  = await axios.post(`${backendUrl}/api/v1/signin`, {
            username: username(),
            password: password()
        })

        console.log("Response:", response.data)

        localStorage.setItem("token", response.data.token)
        localStorage.setItem("user", JSON.stringify(response.data.user))

        alert("You have logged in")
        window.location.href = "/dashboard"
    } catch (error) {
        console.log("Couldn't login",error)
        
    }

    console.log(localStorage.getItem("token"))
}
import axios from "axios";
import { password, username } from "../hooks/common.js";

export const handleSignin = async () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    try {
        const response = await axios.post(`${backendUrl}/api/v1/signin`, {
            username: username(),
            password: password()
        });

        console.log("Full Response:", response);

        if (!response.data || !response.data.data) {
            console.error("Token is missing in the response!", response.data);
            alert("Login failed: No token received.");
            return;
        }

        localStorage.setItem("token", response.data.data);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        alert("You have logged in");
        window.location.href = "/dashboard";
    } catch (error) {
        console.error("Couldn't login", error);
    }
};
